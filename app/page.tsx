import Image from "next/image"
import Link from "next/link"
// import AkseMan from "@/public/images/my-image.jpg"

function HomePage() {
  return (
    <section>
      <div className="container m-auto">
        <div className="flex flex-wrap -mx-4">
          {/* sm - md - lg - xl */}
          <div className="w-full md:w-1/2 px-4">
            <Image
              src="/images/my-image.jpg"
              alt="image"
              width={600}
              height={400}
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">سلام به بچه های آلفا!</h2>
            <p>تمرین کنید! تمرین کنید! تمرین کنید!</p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <p>
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <div className="text-left mt-4">
              <Link href="#" className="inline-block py-2 px-4 transition bg-rose-600 text-white hover:bg-amber-600">
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage