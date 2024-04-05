import '../App.css'
import Layout from '../Layouts/Layout.jsx'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
const Aboutpage = () => {

return (
  <Layout>
   <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">درباره کیش</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">مروارید خلیج فارس</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              جزیرهٔ کیش، یک جزیرهٔ تفریحی ورزشی در شهرستان بندر لنگه، استان هرمزگان در جنوب ایران واقع در خلیج فارس است. کیش به دلیل وجود منطقه آزاد تجاری، مراکز تفریحی و تجاری، جاذبه‌های گردشگری و هتل‌های فراوان یکی از مقاصد عمده گردشگری در ایران به‌شمار می‌رود.[۱] جمعیت جزیره حدود ۳۵ هزار نفر است.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://last-cdn.com/2021/11/17/nb4ErhWyGFyz2ILebaBcSLXBOPpLb25UaPwE3YxR.jpeg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              جزیره کیش سومین مقصد پربازدید تعطیلات در خاورمیانه پس از دبی و شرم‌الشیخ است. گردشگران بسیاری از کشورهایی که ایران معمولاً برای آن‌ها نیاز به ویزا دارد، از اخذ ویزا برای کیش معاف هستند. این جزیره دارای ۹۱٫۵ کیلومتر مربع مساحت است و از شمال به ایران، از شرق به تنگه هرمز، از جنوب به کشور امارات متحده عربی و از غرب به کشورهای بحرین، قطر و عربستان منتهی می‌شود.
              </p>
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">دوران باستان</h2>
              <p className="mt-6">
              جزیره کیش در تاریخ با نام‌های کامتینا، اراکیا (یونانی باستان: Αρακία)، آراکاتا و قیس نام برده شده‌است. موقعیت جغرافیایی استراتژیک جزیره کیش از دوران تمدن‌های باستانی آشور و ایلام مشخص شد که قایق‌های بادبانی در امتداد خط ساحلی جنوبی از این جزیره در کنار جزایر قشم و هرمز به عنوان ایستگاهی در طول مسیر استفاده می‌کردند. با از بین رفتن این تمدن‌ها، موقعیت برتر جزیره کیش از بین رفت. با بنیانگذاری شاهنشاهی هخامنشیان، خلیج فارس به شدت تحت تأثیر قرار گرفت. در سایه هخامنشیان جزایر خلیج فارس رونق یافتند، دریانوردی در خلیج فارس گسترش یافت و از کشتی‌های بهتری برای حمل مسافر و کالا استفاده شد. در این دوره ابزار کمک‌ناوبری از جمله فانوس دریایی برای تسهیل دریانوردی در خلیج فارس نیز راه‌اندازی شد.

اسکندر مقدونی پس از حمله به ایران، در سال ۳۲۵ پیش از میلاد نئارخوس را برای سفری اکتشافی به دریای عمان و خلیج فارس روانه کرد. نوشته‌های نئارخوس در مورد آراکاتا حاوی اولین اشاره شناخته‌شده جزیره کیش در دوران باستان است.[1]

حاکمیت کیش در دوره اشکانیان و ساسانیان نیز در دست ایران بود و با گسترش اسلام، این جزیره به دست خلفای اموی افتاد. سرانجام در سال ۲۴۹ قمری یکی از ایرانیان اهل ری بر خلیفه شورش کرد و تمامی جزایر خلیج فارس را از جمله و بحرین تسخیر کرد.[۴] از دوران حکومت آل‌بویه کیش دوباره تحت حکومت ایران قرار گرفت.[۴]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

}

export default Aboutpage
