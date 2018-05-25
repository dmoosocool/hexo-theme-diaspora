
/**
 * 将 'MM DD, YYYY' 这样的时间格式转成月份为中文.
 * 
 * @param {String} date 日期字符串
 */
var getDiasporaDate = function getDiasporaDate(date) {
  var month = date.substr(0, 2);
  var elseData = date.substr(2, date.length);
  var chineseMonth;
  switch(month){
    case '01':
      chineseMonth = '一月';
    break;
    case '02':
      chineseMonth = '二月';
    break;
    case '03':
      chineseMonth = '三月';
    break;
    case '04':
      chineseMonth = '四月';
    break;
    case '05':
      chineseMonth = '五月';
    break;
    case '06':
      chineseMonth = '六月';
    break;
    case '07':
      chineseMonth = '七月';
    break;
    case '08':
      chineseMonth = '八月';
    break;
    case '09':
      chineseMonth = '九月';
    break;
    case '10':
      chineseMonth = '十月';
    break;
    case '11':
      chineseMonth = '十一月';
    break;
    case '12':
      chineseMonth = '十二月';
    break;
  }

  return chineseMonth + elseData;
}

hexo.extend.helper.register('getDiasporaDate', getDiasporaDate);