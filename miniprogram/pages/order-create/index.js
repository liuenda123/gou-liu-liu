Page({
  data: { duration: 30, petName: '请先添加宠物', date: '', time: '18:00', address: '' },
  onLoad() { const d = new Date(); this.setData({ date: `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}` }); },
  chooseDuration() { wx.showActionSheet({ itemList: ['30分钟（25元）', '60分钟（45元）'], success: r => this.setData({ duration: r.tapIndex === 0 ? 30 : 60 }) }); },
  submit() { wx.showModal({ title: '模拟下单', content: '当前为原型版本，微信支付尚未接入。', confirmText: '确认', success: r => { if (r.confirm) wx.switchTab({ url: '/pages/orders/index' }); } }); }
})
