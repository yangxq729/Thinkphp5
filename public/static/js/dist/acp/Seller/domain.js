$(function(){$(".J-audit").click(function(){var a=$(this),b=a.data("id");defaults={title:a.data("icp"),content:a.data("name")};var c=_.template($("#tpl_edit_notice").html(),defaults),d=$(c),e=d.find("input[name='icp_number']"),f=d.find("input[name='domain_name']");return $.jBox.show({title:"域名审核",content:d,btnOK:{onBtnClick:function(a){var c=e.val(),d=f.val();return""==d?void HYD.FormShowError(f,"域名不能为空"):""==c?void HYD.FormShowError(e,"备案号不能为空"):($.jBox.close(a),void $.ajax({url:"/Seller/domainAudit",type:"post",dataType:"json",data:{id:b,domain_name:d,icp_number:c,type:"agree"},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，添加成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，添加失败："+a.msg),$.jBox.hideloading()}}))}}}),!1}),$(".J-notaudit").click(function(){var a=$(this).data("id");return $.jBox.show({title:"域名审核",content:"确认拒绝吗？",btnOK:{onBtnClick:function(b){$.jBox.close(b),$.ajax({url:"/Seller/domainAudit",type:"post",dataType:"json",data:{id:a,type:"refresh"},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，添加成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，添加失败："+a.msg),$.jBox.hideloading()}})}}}),!1}),$(".j-auditAll").click(function(){var a=[],b=$(".table-ckbs:checked");return b.each(function(){a.push($(this).data("id"))}),a.length?($.jBox.show({title:"批量同意",content:"确认要同意吗？",btnOK:{onBtnClick:function(b){$.jBox.close(b),$.ajax({url:"/Seller/domainAllAudit",type:"post",dataType:"json",data:{ids:a},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，审核成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，审核失败："+a.msg),$.jBox.hideloading()}})}}}),!1):void HYD.hint("warning","对不起，请选择需要审核的域名！")})});