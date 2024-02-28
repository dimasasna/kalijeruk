// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import hero1 from '../../assets/img/hero1.jpeg';

import { Autoplay } from 'swiper/modules';

export default function Hero() {
  return (
    <div className="w-full pt-[20px] bg-[#f8f7f4]  font-poppins">
      <div className=''>
        <Swiper spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <div className='flex flex-col lg:flex-row px-4 w-full lg:w-[1380px] mx-auto gap-10'>
              <div className='kiri lg:w-[50%] w-full flex flex-col text-center lg:text-start lg:mt-28 lg:mb-32'>
                <div className='w-fit py-2 px-4 bg-[#537561] bg-opacity-80 text-white rounded-2xl mb-4'>
                  Selamat Datang di Website Desa Kalijeruk
                </div>
                <h1 className='text-[30px] font-bold tracking-tighter mb-4'>Menyatu dengan Alam, Berbagi Bersama Desa, Wadah Cinta dan Kesejahteraan</h1>
                <div className='lg:text-left text-center'><a className='w-fit bg-[#537561] text-white py-2 px-4 hover:bg-green-800' href="">Lihat Selengkapnya</a></div>
              </div>
              <div className='kanan lg:w-[50%] w-full lg:mt-8'>
                <img className='shadow-2xl' src={hero1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-row w-[1380px] mx-auto gap-10'>
              <div className='kiri w-[50%] flex flex-col mt-28 mb-32  '>
                <div className='w-fit py-2 px-4 bg-[#537561] bg-opacity-80 text-white rounded-2xl mb-4'>
                  Selamat Datang di Website Desa Kalijeruk
                </div>
                <h1 className='text-[30px] font-bold tracking-tighter mb-4'>Menginspirasi Kehidupan Sederhana: Desa, Sumber Inspirasi Tanpa Batas</h1>
                <a className='w-fit bg-[#537561] text-white py-2 px-4 hover:bg-green-800 ho' href="">Lihat Selengkapnya</a>
              </div>
              <div className='kanan w-[50%] mt-12'>
                <div className='aspect-square w-[350px] mx-auto border border-black'>
                  Gambar Nich
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
