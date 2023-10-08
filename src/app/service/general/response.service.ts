import { Injectable } from '@angular/core';
import { CommonService, Snackbar } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  constructor(private common: CommonService) {}
  mapValidResponse(data: any, messageSuccessful: boolean = false) {
    if (messageSuccessful == true) {
      const modelSnackbar:Snackbar=new Snackbar();
      this.common.showSnackBar(modelSnackbar);
    }
    this.common.hideProgressBar();
    return data;
  }
  handelError(error: any) {
    let data = {
      time: 10000,
      title: 'خطای (' + error.status + ') رخ داده است',
      description: '',
      type: 1,
    };
    switch (error.status) {
      case 0: {
        data.title = 'خطای شبکه';
        data.description =
          'اتصال برقرار نمی باشد لطفا با مدیر سیستم ارتباط برقرا کنید';
        data.type = 2;
        break;
      }
      case 102: {
        data.description = 'سرور در حال پردازش است ولی پاسخی دریافت نشد';
        break;
      }
      case 301: {
        data.description = 'آدرسی که درخواست میدهید تغییر رکده است';
        break;
      }
      case 302: {
        data.description =
          'آدرس منبع  درخواستی به طور موقت تغییر پیدا کرده است،لطفا بعدن تلاش نماید';
        break;
      }
      case 401: {
        data.title = 'خطای (401)';
        data.description = 'احراز هویت تایید نشده است';
        data.type = 2;
        break;
      }
      case 400: {
        data.title = 'خطا در ارسال اطلاعات ناقص (400)';
        data.description = error.error.title;
        data.type = 2;
        break;
      }
      case 500: {
        if (error.error.errorMessage?.length) {
          data.description = error.error.errorMessage;
        } else {
          data.description =
            'اتصال با سرور قطع می باشد،لطفا لحضاتی دیگر تلاش نماید و یا با مدیر سیستم ارتباط برقرار کنید';
        }
        data.title = 'خطای (500)';
        data.type = 2;
        break;
      }
      default: {
        data.title = 'خطای غیر منتظره';
        data.description = error?.errorMessage;
        data.type = 2;
      }
    }
    this.common.showSnackBar(data);
    setTimeout(() => {
      this.common.hideProgressBar();
    }, 500);
  }
}
