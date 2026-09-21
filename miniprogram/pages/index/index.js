Page({
  data: {
    city: '义乌',
    walkers: [
      { id: 1, name: '小王', rating: '5.0', orders: 32, distance: '1.2km', price: 25, tags: '小型犬、柯基' },
      { id: 2, name: '阿杰', rating: '4.9', orders: 28, distance: '2.1km', price: 25, tags: '大型犬、耐心' }
    ]
  },
  goCreate() { wx.navigateTo({ url: '/pages/order-create/index' }); },
  goWalkers() { wx.navigateTo({ url: '/pages/walkers/index' }); },
  goPets() { wx.navigateTo({ url: '/pages/pets/index' }); }
})
