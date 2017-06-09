var index = 0;
Page({
  data:{
    name:"请填写您的姓名",
    tel:"请填写您的联系方式",
    addreValue:0,
    addreRange:['　　　　　　　　　　','长沙市芙蓉区','长沙市天心区','长沙市雨花区','长沙市开福区','长沙市岳麓区','长沙市长沙县'],
    door:"街道门牌信息",
    areaValue:0,
    areaRange:['　　','60以下','60-90','90-110','110-130','130-140','140-150','150-160','160-170','170-180','180以上']
  },
    areaPickerBindchange:function(e){
    this.setData({
      areaValue:e.detail.value
    })
  },
    addrePickerBindchange:function(e){
    this.setData({
      addreValue:e.detail.value
    })
  },
  formSubmit: function(e) {
    var warn ="";
    var that = this;
    var flag = false;
    if(e.detail.value.name==""){
      warn = "请填写您的姓名！";
    }else if(e.detail.value.tel==""){
      warn = "请填写您的手机号！";
    }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号格式不正确";
    }else if(e.detail.value.addre=='0'){
      warn = "请选择您的所在区域";
    }else if(e.detail.value.door==""){
      warn = "请输入您的具体地址";
    }else if(e.detail.value.area=='0'){
      warn = "请输入您的房屋面积";
    }else{
      flag=true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
        wx.redirectTo({
        url: '../chooseAddre/chooseAddre?tel='+e.detail.value.tel+"&addre="+that.data.addreRange[e.detail.value.addre]+"&door="+e.detail.value.door+"&name="+e.detail.value.name+"&area="+that.data.areaRange[e.detail.value.area]+"&flag="+flag+"&areavalue="+e.detail.value.area+"&addrevalue="+e.detail.value.addre+"&door="+e.detail.value.door
        //？后面跟的是需要传递到下一个页面的参数

      }); 
         console.log("传过去的地址下标是多少？"+e.detail.value.addre)
    }
    if(flag==false){
      wx.showModal({
      title: '提示',
      content:warn
    })
    }
    
  },
  
  })