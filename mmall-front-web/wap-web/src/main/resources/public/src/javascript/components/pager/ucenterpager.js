/**
 * 用户中心的翻页样式
 * author zzj(hzzhangzhoujie@corp.netease.com)
 */
NEJ.define([
  "text!./ucenterpager.html",
  "pro/components/pager/pager"
  ], function(tpl, BasePager){

  var ucenterpager = BasePager.extend({
    name: "ucenterpager",
    template: tpl
  });

  return ucenterpager;

})