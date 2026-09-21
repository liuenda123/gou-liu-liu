Page({
  data: { walkers: [] },
  onLoad() {
    this.setData({ walkers: [
      { id: 1, name: '小王', rating: '5.0', orders: 32, distance: '1.2km', price: 25, tags: '小型犬、柯基' },
      { id: 2, name: '阿杰', rating: '4.9', orders: 28, distance: '2.1km', price: 25, tags: '大型犬、耐心' }
    ] });
  },
  openDetail(e) { wx.navigateTo({ url: '/pages/walker-detail/index?id=' + e.currentTarget.dataset.id }); }
})
