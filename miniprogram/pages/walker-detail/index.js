Page({
  data: { walker: { name: '小王', rating: '5.0', orders: 32, price: 25, tags: '小型犬、柯基', intro: '有三年养狗经验，耐心细致。' } },
  book() { wx.navigateTo({ url: '/pages/order-create/index' }); }
})
