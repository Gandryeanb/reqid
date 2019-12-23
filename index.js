class Reqid {
  constructor(option) {
    if (!option) {
      this._randomLength = 4;
      this._separator = false;
    } else {
      this._randomLength = option.randomLength ? option.randomLength : 4;
      this._separator = option.separator ? option.separator : false;
    }
  }
  
  _generateDate (dateMaster) {
    let month = String(dateMaster.getMonth() + 1);
    let date = String(dateMaster.getDate());
    let hour = String(dateMaster.getHours());
    let minute = String(dateMaster.getMinutes());
    let second = String(dateMaster.getSeconds());
    let mili = String(dateMaster.getMilliseconds());

    if (month.length === 1) month = '0' + month;
    if (date.length === 1) date = '0' + date;
    if (hour.length === 1) hour = '0' + hour;
    if (minute.length === 1) minute = '0' + minute;
    if (second.length === 1) second = '0' + second;
    if (mili.length === 1) mili = '00' + mili;
    if (mili.length === 2) mili = '0' + mili;

    return {
      year: dateMaster.getFullYear(),
      month,
      date,
      hour,
      minute,
      second,
      mili,
    }
  }

  _generateRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i += 1) {
      const randomNum = Math.floor(Math.random() * 10)
      result = result + String(randomNum);
    }
    return result;
  }

  generate() {
    const objDate = this._generateDate(new Date());
    const separator = this._separator ? this._separator : '';
    let key, randomString = '';

    const arrValues = Object.keys(objDate).map((d, i) => {
      if (i === Object.keys(objDate).length - 1) {
        return objDate[d]
      };
      return objDate[d] + separator;
    });

    key = arrValues.join('');

    if (this._randomLength) {
      randomString = `-${this._generateRandomString(this._randomLength)}`;
    }
    return key + randomString;
  }
}

module.exports = Reqid;