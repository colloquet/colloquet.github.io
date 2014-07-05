(function(e){"use strict";var t={},n={},r=new RegExp(/(minChecked|maxChecked|minSelected|maxSelected|minLength|maxLength|equal|customReg)\[[(\w)-_]{1,15}\]/i),i=new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),s=new RegExp(/^[\-\+]?\d+\.?\d*$/);var o={empty:"This field is required. Please be sure to check.",email:"Your E-mail address appears to be invalid. Please be sure to check.",number:"You can enter only numbers in this field.",maxLength:"Maximum {count} characters allowed!",minLength:"Minimum {count} characters allowed!",checkbox:"This checkbox is required. Please be sure to check.",maxChecked:"Maximum {count} options allowed. Please be sure to check.",minChecked:"Please select minimum {count} options.",selectbox:"Please select an option.",maxSelected:"Maximum {count} selection allowed. Please be sure to check.",minSelected:"Minimum {count} selection allowed. Please be sure to check.",notEqual:"Fields do not match. Please be sure to check.",creditCard:"Invalid credit card number. Please be sure to check."};var u={display:"bubble",errorClass:"validetta-bubble",errorClose:true,errorCloseClass:"validetta-bubbleClose",ajax:{call:false,type:"GET",url:null,dataType:"html",beforeSend:e.noop,success:e.noop,fail:e.noop,complete:e.noop},realTime:false,onCompleteFunc:e.noop,customReg:{}};t=function(t,n){this.handler=false;this.options=e.extend(true,{},u,n);this.form=t;return this.events.call(this)};t.prototype.events=function(){var t=this;e(this.form).submit(function(e){n=this.querySelectorAll("[data-validetta]");return t.init.call(t,e)});if(this.options.realTime===true){e(this.form).find("[data-validetta]").not("[type=checkbox]").on("change",function(r){n=e(this);return t.init.call(t,r)});e(this.form).find("[data-validetta][type=checkbox]").on("click",function(e){n=t.form.querySelectorAll('[data-validetta][type=checkbox][name="'+this.name+'"]');return t.init.call(t,e)})}e(this.form).find("[type=reset]").on("click",function(){return t.reset.call(t)});if(this.options.errorClose){e(this.form).on("click","."+this.options.errorCloseClass,function(){var e=this.parentNode;if(e){t.window.close.call(t,e)}return false})}};t.prototype.init=function(t){var i=this;this.reset.call(this,n);for(var s=n.length-1;s>=0;s--){var u,a,f=[],l=[];u=n[s];a="";f=e(u).val();l=u.getAttribute("data-validetta").split(",");for(var c=l.length-1;c>=0;c--){if(l[c]==="required"){var h=u.getAttribute("type");if(h==="checkbox"&&!i.check.checkbox.checked(u)){a+=o.checkbox+"<br />"}else if(h==="radio"&&i.check.radio.call(i,u)){a+=o.empty+"<br />"}else if(u.tagName==="SELECT"&&!i.check.selectbox.selected(f)){a+=o.selectbox+"<br />"}if((h==="text"||h==="password"||u.tagName==="TEXTAREA")&&!i.check.empty.call(i,f)){a+=o.empty+"<br />"}}if(l[c]==="number"&&!i.check.number(f)){a+=o.number+"<br />"}if(l[c]==="email"&&!i.check.mail(f)){a+=o.email+"<br />"}if(l[c]==="creditCard"&&f!==""&&!i.check.creditCard(f)){a+=o.creditCard+"<br />"}if(r.test(l[c])){var p=l[c].split(/\[|,|\]/);if(p[0]==="maxLength"&&!i.check.maxLength(f,p[1])){a+=o.maxLength.replace("{count}",p[1])+"<br />"}else if(p[0]==="minLength"&&!i.check.minLength(f,p[1])){a+=o.minLength.replace("{count}",p[1])+"<br />"}else if(p[0]==="maxChecked"&&!i.check.checkbox.maxChecked.call(i,u,p[1])){u=i.form.querySelectorAll('input[type=checkbox][data-validetta][name="'+u.name+'"]')[0];a+=o.maxChecked.replace("{count}",p[1])+"<br />"}else if(p[0]==="minChecked"&&!i.check.checkbox.minChecked.call(i,u,p[1])){u=i.form.querySelectorAll('input[type=checkbox][data-validetta][name="'+u.name+'"]')[0];a+=o.minChecked.replace("{count}",p[1])+"<br />"}else if(p[0]==="maxSelected"&&!i.check.selectbox.maxSelected(f,p[1])){a+=o.maxSelected.replace("{count}",p[1])+"<br />"}else if(p[0]==="minSelected"&&!i.check.selectbox.minSelected(f,p[1])){a+=o.minSelected.replace("{count}",p[1])+"<br />"}else if(p[0]==="equal"&&!i.check.equal.call(i,f,p[1])){a+=o.notEqual+"<br />"}else if(p[0]==="customReg"&&!i.check.customReg(f,i.options.customReg[p[1]].method)){a+=(i.options.customReg[p[1]].errorMessage||o.empty)+"<br />"}}}if(a!==""){i.window.open.call(i,u,a)}}if(t.type!=="submit"){return}else if(i.handler===true){return false}else{if(i.options.ajax.call){i.ajax.call(i,arguments);return false}return i.options.onCompleteFunc(i,t)}};t.prototype.check={empty:function(e){return this.clear(e)===""?false:true},mail:function(e){return i.test(e)===false&&e!==""?false:true},number:function(e){return s.test(e)===false&&e!==""?false:true},minLength:function(e,t){var n=e.length;return n<t&&n!==0?false:true},maxLength:function(e,t){return e.length>t?false:true},equal:function(t,n){return e(this.form).find('input[name="'+n+'"]').val()!==t?false:true},creditCard:function(e){var t,n,r,i,s,o,u=0,a;t=new RegExp(/[^0-9]+/g);n=e.replace(t,"");a=n.length;if(a<16){return false}for(s=0;s<a;s++){r=a-s;i=parseInt(n.substring(r-1,r),10);if(s%2===1){o=i*2;if(o>9){o=1+(o-10)}}else{o=i}u+=o}if(u>0&&u%10===0){return true}return false},checkbox:{checked:function(e){return!e.checked?false:true},maxChecked:function(t,n){var r=e(this.form.querySelectorAll('input[type=checkbox][name="'+t.name+'"]')).filter(":checked").length;return r>n?false:true},minChecked:function(t,n){var r=e(this.form.querySelectorAll('input[type=checkbox][name="'+t.name+'"]')).filter(":checked").length;return r<n?false:true}},selectbox:{selected:function(e){return e===""||e===null?false:true},maxSelected:function(e,t){return e!==null&&e!==""&&e.length>t?false:true},minSelected:function(e,t){return e!==null&&e!==""&&e.length<t?false:true}},radio:function(t){var n=e(this.form.querySelectorAll('input[type=radio][name="'+t.name+'"]')).filter(":checked").length;return n===1?false:true},customReg:function(e,t){var n=new RegExp(t);return n.test(e)===false&&e!==""?false:true}};t.prototype.window={open:function(t,n){var r=t.parentNode;if(typeof r==="undefined"){r=t[0].parentNode}if(e(r).find("."+this.options.errorClass).length>0){return}var i=document.createElement("span");i.className=this.options.errorClass;if(this.options.display==="bubble"){var s,o,u,a;s=e(t).position();o=e(t).width();u=e(t).height();a=s.top;e(i).empty().css({left:s.left+o+30+"px",top:a+"px"})}if(t.nodeName=="TEXTAREA"){r.appendChild(i)}else{r.parentNode.appendChild(i)}i.innerHTML=n;if(this.options.errorClose){var f=document.createElement("span");f.innerHTML="x";f.className=this.options.errorCloseClass;i.appendChild(f)}this.handler=true},close:function(e){e.parentNode.removeChild(e);this.handler=false}};t.prototype.reset=function(t){var n={};if(typeof t==="undefined"||t.length>1&&t[0].getAttribute("type")!=="checkbox"){n=e(this.form).find("."+this.options.errorClass)}else{n=e(t[0].parentNode).find("."+this.options.errorClass)}for(var r=n.length-1;r>=0;r--){this.window.close.call(this,n[r])}};t.prototype.clear=function(e){return e.replace(/^\s+|\s+$/g,"")};t.prototype.ajax=function(){var t,n,r=this,i;t=e(this.form).serialize();i=this.form.getAttribute("action");n=this.options.ajax.url?this.options.ajax.url:i;if(!this.options.ajax.url&&(i===""||i===null)){return console.log("Form action not valid !")}e.ajax({type:r.options.ajax.type,url:n,data:t,dataType:r.options.ajax.dataType,options:r.options,beforeSend:function(){return r.options.ajax.beforeSend()}}).done(function(e){r.options.ajax.success(r,e)}).fail(function(e,t){r.options.ajax.fail(e,t)}).always(function(e){r.options.ajax.complete(e)})};e.fn.validetta=function(n){if(e.validettaLanguage){o=e.extend(true,{},o,e.validettaLanguage.messages)}return this.each(function(){new t(this,n);return this})}})(jQuery)