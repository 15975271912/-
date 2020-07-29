$(function(){
	var re=/[^\w\u4e00-\u9fa5]/g;//数字、字母（不分大小写）、汉字、下划线
	var reNum=/[^\d]/g;
	var name_length=0;
	//对用户名进行验证
	$('#username').focus(function(){
		$('.form-validate').eq(0).html('<i class="i-def point"></i><span>支持中文、字母、数字、“-”“_”的组合，4-20个字符</span>');
	});
	
	$('#username').keyup(function(){
		name_length=getLength(this.value);
	
		if(re.test(this.value)){
			$('.form-validate').eq(0).html('<i class="i-def error"></i><span class="feifa">格式错误，仅支持汉字、字母、数字、“-”“_”的组合</span>');
			$('.form-list').eq(0).css('border','solid 1px #e22');
			$('.form-list').eq(0).find('.i-status').css('display','none');
		}else{
			$('.form-list').eq(0).css('border','solid 1px #ddd');
			$('.form-validate').eq(0).html('<i class="i-def point"></i><span>支持中文、字母、数字、“-”“_”的组合，4-20个字符</span>');
			$('.form-list').eq(0).find('.i-status').css('display','none');
		}
	});
	// 鼠标没有聚焦在输入框
	$('#username').blur(function(){
       
	    if(this.value==""){
			$('.form-validate').eq(0).html('');
			$('.form-list').eq(0).css('border','solid 1px #ddd');
			$('.form-list').eq(0).find('.i-status').css('display','none');
		}
	
		else if(name_length>20){
			$('.form-validate').eq(0).html('<i class="i-def error"></i><span class="feifa">长度只能在4-20个字符之间</span>');
			$('.form-list').eq(0).css('border','solid 1px #e22');
			$('.form-list').eq(0).find('.i-status').css('display','none');
		}
		
		else if(name_length<4){
			$('.form-validate').eq(0).html('<i class="i-def error"></i><span class="feifa">长度只能在4-20个字符之间</span>');
			$('.form-list').eq(0).css('border','solid 1px #e22');
			$('.form-list').eq(0).find('.i-status').css('display','none');
		}
		
		else if(!reNum.test(this.value)){
			$('.form-validate').eq(0).html('<i class="i-def error"></i><span class="feifa">用户不能是纯数字,请重新输入</span>');
			$('.form-list').eq(0).css('border','solid 1px #e22');
			$('.form-list').eq(0).find('.i-status').css('display','none');
		}
		
		else{
			$('.form-list').eq(0).append('<i class="i-status"></i>');
			$('.form-list').eq(0).css('border','solid 1px #ddd');
			$('.form-validate').eq(0).html('');
			$('.form-list').eq(0).find('.i-status').css('display','block');
		}
	});

	// 设置密码
	var pwd_reg1= /^(?![a-zA-Z]+$)(?!\d+$)(?![\W_]+$)\S{6,10}$/;//数字、字母、加字符 6到10
	var pwd_reg2= /^(?![a-zA-Z]+$)(?!\d+$)(?![\W_]+$)\S{11,20}$/;//数字、字母、加字符 11到20
	var reChar=/[^a-zA-Z]/g;
	$('#password').focus(function(){
		$('.form-validate').eq(1).html('<i class="i-def point"></i><span>建议使用字母、数字和符号两种及以上的组合，6-20个字符</span>');
	});

	$('#password').keyup(function(){
	
		if($(this).val().match(pwd_reg1)){
			$('.form-validate').eq(1).html('<i class="i-def point2"></i><span>安全强度适中，可以使用三种以上的组合来提高安全强度</span>');
			$('.form-list').eq(1).append('<i class="i-status"></i>');
			$('.form-list').eq(1).find('.i-status').css('display','block');
		}
		
		else if($(this).val().match(pwd_reg2)){
			$('.form-validate').eq(1).html('<i class="i-def point3"></i><span>你的密码很安全</span>');
			$('.form-list').eq(1).append('<i class="i-status"></i>');
			$('.form-list').eq(1).find('.i-status').css('display','block');
		}
	
		else if(!reNum.test(this.value)||!reChar.test(this.value)){
		
			if(this.value.length>5){
				$('.form-validate').eq(1).html('<i class="i-def point4"></i><span>有被盗风险,建议使用字母、数字和符号两种及以上组合</span>');
				$('.form-list').eq(1).append('<i class="i-status"></i>');
				$('.form-list').eq(1).find('.i-status').css('display','block');
			}
		
			if(this.value.length>10){
				$('.form-validate').eq(1).html('<i class="i-def point2"></i><span>安全强度适中，可以使用三种以上的组合来提高安全强度</span>');
				$('.form-list').eq(1).append('<i class="i-status"></i>');
				$('.form-list').eq(1).find('.i-status').css('display','block');
			}
		
			if(this.value.length<6){
				$('.form-validate').eq(1).html('<i class="i-def point"></i><span>建议使用字母、数字和符号两种及以上的组合，6-20个字符</span>');
				$('.form-list').eq(1).find('.i-status').css('display','none');
			}
		}
		else{
			$('.form-validate').eq(1).html('<i class="i-def point"></i><span>建议使用字母、数字和符号两种及以上的组合，6-20个字符</span>');
			$('.form-list').eq(1).find('.i-status').css('display','none');
		}
	});

	$('#password').blur(function(){
		
		if($(this).val() == ""){
			$('.form-validate').eq(1).html('');
			$('.form-list').eq(1).css('border','solid 1px #ddd');
			$('.form-list').eq(1).find('.i-status').css('display','none');
		}
		
		else if(this.value.length<6){
			$('.form-validate').eq(1).html('<i class="i-def error"></i><span class="feifa">长度只能在6-20个字符之间</span>');
			$('.form-list').eq(1).css('border','solid 1px #e22');
		}else{
			$('.form-list').eq(1).css('border','solid 1px #ddd');
		}
	});


	$('#Repassword').focus(function(){
		$('.form-validate').eq(2).html('<i class="i-def point"></i><span>请再次输入密码</span>');
	});

	$('#Repassword').blur(function(){
	
		if($(this).val() == ""){
			$('.form-validate').eq(2).html('');
			$('.form-list').eq(2).css('border','solid 1px #ddd');
			$('.form-list').eq(2).find('.i-status').css('display','none');
		}
	
		else if($(this).val() != $("#password").val()){
			$('.form-validate').eq(2).html('<i class="i-def error"></i><span class="feifa">两次密码输入不一致</span>');
			$('.form-list').eq(2).find('.i-status').css('border','solid 1px #e22');
		}else{
			$('.form-list').eq(2).css('border','solid 1px #ddd');
			$('.form-list').eq(2).append('<i class="i-status"></i>');
			$('.form-list').eq(2).find('.i-status').css('display','block');
			$('.form-validate').eq(2).html('');			
		}
	});


	var phone_reg = /^1[3|4|5|7|8]\d{9}$/;

	$('#telphone').focus(function(){
		$('.form-validate').eq(3).html('<i class="i-def point"></i><span>完成验证后，你可以用该手机登录和找回密码</span><a href="#">邮箱验证</a>');	
	});
	
	$('#telphone').blur(function(){
        if ($(this).val() == "") {  
			$('.form-validate').eq(3).html('<a href="#">邮箱验证</a>');
			$('.form-list').eq(3).find('.i-status').css('display','none');
        }
      
		else if($(this).val().length != 11) {   
            $('.form-validate').eq(3).html('<i class="i-def error"></i><span class="feifa">格式有误</span><a href="#">邮箱验证</a>');
        	$('.form-list').eq(3).css('border','solid 1px #e22');
        	$('.form-list').eq(3).find('.i-status').css('display','none');
        }
        
        else if(!$(this).val().match(phone_reg)) {  
            $('.form-validate').eq(3).html('<i class="i-def error"></i><span class="feifa">格式有误</span><a href="#">邮箱验证</a>');
        	$('.form-list').eq(3).css('border','solid 1px #e22');
        	$('.form-list').eq(3).find('.i-status').css('display','none');
        } else {  
			$('.form-list').eq(3).css('border','solid 1px #ddd');
			$('.form-list').eq(3).append('<i class="i-status"></i>');
			$('.form-list').eq(3).find('.i-status').css('display','block');
			$('.form-validate').eq(3).html('<a href="#">邮箱验证</a>');	
        }  
	});

	$('#identifycode').focus(function(){
		$('.form-validate').eq(4).html('<i class="i-def point"></i><span>看不清？点击图片更换验证码</span>');
	});

	$('#identifycode').blur(function(){
		$('.form-validate').eq(4).html('');
	});

	var array=["0","1","2","3","4","5","6","7","8"];

	$('#click').click(function(){
		var s = parseInt(Math.random()*array.length);//得到数组里随机的数
		$('.form-list').eq(4).find('img').attr("src","image/image"+s+".jpg");//对页面的二维码进行随机的更新		
	});
})

function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}