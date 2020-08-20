export enum Pages {
  Index = '/pages/index/index',
  Details = '/pages/details/details',
}

export default {
  pages: [Pages.Index.slice(1), Pages.Details.slice(1)],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    pageOrientation: 'landscape',
  },
};
