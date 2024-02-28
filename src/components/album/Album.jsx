import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

export default function Album() {
    return (
        <div className="w-[1380px] mx-auto mt-20 mb-[20px]">
            <h1 className="text-center text-[28px] font-bold mb-6">Album</h1>
            <div className='w-full mx-auto'>
            <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper2">
                <SwiperSlide>
                        <div className='w-full h-52 border border-black relative group cursor-pointer'>
                            <h1 className='absolute p-2 bottom-0  font-bold text-[18px] group-hover:text-[#537561]  '>KKN UAD XV.A.1 2024</h1>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='w-full h-52 border border-black relative group cursor-pointer'>
                            <h1 className='absolute p-2 bottom-0  font-bold text-[18px] group-hover:text-[#537561]  '>POSYANDU</h1>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='w-full h-52 border border-black relative group cursor-pointer'>
                            <h1 className='absolute p-2 bottom-0  font-bold text-[18px] group-hover:text-[#537561]  '>SENAM</h1>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='w-full h-52 border border-black relative group cursor-pointer'>
                            <h1 className='absolute p-2 bottom-0  font-bold text-[18px] group-hover:text-[#537561]  '>KEGIATAN PKK</h1>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='w-full h-52 border border-black relative group cursor-pointer'>
                            <h1 className='absolute p-2 bottom-0  font-bold text-[18px] group-hover:text-[#537561]  '>BERCOCOK TANAM</h1>
                        </div>
                </SwiperSlide>
                
            </Swiper>
            </div>
        </div>
    )
}
