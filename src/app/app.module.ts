import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { CloudSettings, CloudModule } from '@ionic/cloud-angular'
import { MyApp } from './app.component'
import { AboutPage } from '../pages/about/about'
import { ContactPage } from '../pages/contact/contact'
import { HomePage } from '../pages/home/home'
import { TabsPage } from '../pages/tabs/tabs'
import { RefundPage } from '../pages/refund/refund'
import { AdvancePage } from '../pages/advance/advance'
import { LoginPage } from '../pages/login/login'
import { Refund } from '../providers/refund'
import { RefundModel } from '../model/refund'
import { RecoverPasswordPage } from '../pages/recover-password/recover-password'
import { SignupPage } from '../pages/signup/signup'
import { UserModel } from '../model/user'
import { CostCenterModel } from '../model/cost-center'
import { CompanyModel } from '../model/company'
import { CountryModel } from '../model/country'
import { RegionModel } from '../model/region'
import { AlertHelper } from '../helpers/alert'
import { FormHelper } from '../helpers/form'
import { NewPasswordPage } from '../pages/new-password/new-password'
import { RefundHistoryPage } from '../pages/refund-history/refund-history'

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '9c8d38ab'
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RefundPage,
    AdvancePage,
    LoginPage,
    RecoverPasswordPage,
    SignupPage,
    NewPasswordPage,
    RefundHistoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RefundPage,
    AdvancePage,
    LoginPage,
    RecoverPasswordPage,
    SignupPage,
    NewPasswordPage,
    RefundHistoryPage
  ],
  providers: [
    Refund,
    RefundModel,
    UserModel,
    CompanyModel,
    CostCenterModel,
    CountryModel,
    RegionModel,
    FormHelper,
    AlertHelper,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
