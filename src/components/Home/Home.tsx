import * as React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getCateData, getShoplistData } from '../../fetch/home/home.js'
import Head from './head'
import City from '../Common/City'
import Category from './category'
import LoadMore from '../Common/LoadMore'
import GoToTop from '../Common/GoToTop'

import { Data } from "../../models/Data";
import {ShopList} from "../../models/ShopList";
import {Category} from "../../models/Category";

import '../../static/css/Home/style.less'
import { Category } from "../../models/Category.js";

interface HomeProps {

}

interface HomeState {
    shouldLoad: boolean;
    showGototop: boolean;
    showSelectCity: boolean;
    categoryData: Category[];
    shoplistData: ShopList[];
    hasMore: boolean;
    isLoadingMore: boolean;
    page: number;
    timeoutId: NodeJS.Timer;

}

class Home extends React.PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.changeShouldLoadState = this.changeShouldLoadState.bind(this);
        this.showSelectCityPage = this.showSelectCityPage.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.listenScroll = this.listenScroll.bind(this);

        this.state = {
            shouldLoad: false,
            showGototop: false,
            showSelectCity: false,
            categoryData: [],
            shoplistData: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            timeoutId: null
        };
    }

    public render(): JSX.Element {
        return (
            <div id="home-box" className={this.state.showSelectCity ? "modalMskShow" : ""}>
                <City ref="cityComponent" showSelectCity={this.state.showSelectCity}
                showSelectCityPage={this.showSelectCityPage()} />
                <Head showSelectCityPage={this.showSelectCityPage()} />
                {
                    this.state.categoryData.length > 0
                    && <Category data={this.state.categoryData} />
                }
                <h3 className="shop-list-title">推荐商家</h3>
                {
                    this.state.shoplistData.length > 0
                    && <ShopList data={this.state.shoplistData} />
                }
                {
                    this.state.hasMore &&
                    <LoadMore
                        shouldLoad={this.state.shouldLoad}
                        changeShouldLoadState={this.changeShouldLoadState()}
                        isLoadingMore={this.state.isLoadingMore}
                        loadMoreFn={this.loadMoreData()} />
                }
                <GoToTop showGototop={this.state.showGototop} />
            </div>
        );
    }

    public componentDidMount(): void {
        // 加载大类别
        this.loadCategoryData();
        // 加载首页 推荐商家 数据
        this.loadFirstPageData();

        window.addEventListener("scroll", this.listenScroll);
    }

    public componentWillUnmount(): void {
        window.removeEventListener("scroll", this.listenScroll);
    }

    private listenScroll(): void {
        // 减少渲染次数，提升性能
        let timeoutId: NodeJS.Timer = this.state.timeoutId;
        if (this.state.isLoadingMore) {
            return;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            if (document.body.scrollTop > 300) {
                this.setState({
                    showGototop: true
                });
            } else {
                this.setState({
                     showGototop: false
                });
            }
            this.setState({
                shouldLoad: true
            });
                            }, 50);
        this.setState({
            timeoutId: timeoutId
        });
    }

    private loadCategoryData(): void {
        const categoryData: Promise<Response> = getCateData();
        categoryData.then((res: Response) => {
            return res.json();
        }).then((json: Data<Category[]>) => {
            const data: Category = json.data;
            if (data && data.length > 0) {
                this.setState({
                    categoryData: data
                });
            }
        }).catch((ex: Error) => {
            console.error("首页类别模块获取数据报错, ", ex.message);
        });
    }

    private loadFirstPageData(): void {
        // const cityName = this.props.cityName
        const shoplistData: Promise<Response> = getShoplistData();
        this.resultHandle(shoplistData);
    }

    // 加载跟更多数据
    private loadMoreData(): void {
        // const cityName = this.props.cityName
        const page: number = this.state.page + 1;
        this.setState({
            isLoadingMore: true
        });

        const shoplistData: Promise<Response> = getShoplistData("北京", page);
        const handleResult: Promise<boolean> = this.resultHandle(shoplistData);
        handleResult.then((r: boolean) => {
            if (r) {
                this.setState({
                    page: page,
                    isLoadingMore: false
                });
            }
        });
    }

    private resultHandle(result: Promise<Response>): Promise<boolean> {
        return result.then((res: Response) => {
            return res.json();
        }).then((json: Data<ShopList[]>) => {
            const data: ShopList[] = json.data;
            if (data && data.length > 0) {
                this.setState({
                    shoplistData: this.state.shoplistData.concat(data),
                    hasMore: json.hasMore
                });
            }

            return true;
        }).catch((ex: Error) => {
            console.error("首页推荐商家模块获取数据报错, ", ex.message);

            return false;
        });
    }

    private changeShouldLoadState(): void {
        this.setState({
            shouldLoad: !this.state.shouldLoad
        });
    }

    // 显示选择切换地址页面
    private showSelectCityPage(): void {
        this.setState({
            showSelectCity: !this.state.showSelectCity
        });
    }
}

export {Home};
