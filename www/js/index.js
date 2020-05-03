document.addEventListener('deviceReady',function(){
    // 初始化完成之后才可以识别 执行的是识别成功的回调函数
    // 初始化完成之前不可以识别 执行的是识别失败的回调函数
    // 也就是说 等弹出初始化完成之后点 也可以将识别的方法写在初始化成功的回调函数中
    BaiduOcr.init(
        ()=>{
            alert('初始化完成');
        },
        (error)=>{
            alert("初始化失败")
        })
        // 识别身份证
        document.getElementById('scanner').onclick=function(){
            BaiduOcr.scanId(
                {
                    contentType:"IDCardFront", // 背面传 IDCardBack
                    nativeEnable:false,
                    nativeEnableManual:false
                },
                (result)=>{
                    alert(JSON.stringify(result));
                },
                (error)=>{
                    alert(error)
            });
        }
        // 识别银行卡
        // BaiduOcr.scanBankCard({}, (result)=>{
        //     console.log(JSON.stringify(result));
        // },
        // (error)=>{
        //     console.log(JSON.stringify(error));
        // });

        // 这里是安卓和苹果都支持的方法
        // 用法都是一致的 BaiduOcr.xxx({},successCallback,failCallback) 举一反三即可 
        // 这里就罗列一下方法名即可
        // scanVehicleLicense(识别行驶证)   scanDrivingLicense(识别驾驶证)
        // scanLicensePlate(识别车牌)       scanBusinessLicense(识别营业执照)
        // scanReceipt(识别通用票据)   

        // 安卓额外支持的方法
        // scanPassport(护照)
        // scanNumbers(数字)
        // scanQrCode(二维码)
        // scanBusinessCard(名片)
        // scanHandWriting(手写)
        // scanLottery(彩票)
        // scanVatInvoice(增值税发票) 
})