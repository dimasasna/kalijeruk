import logo from '../../assets/img/logokp.jpg'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube  } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { MdMessage } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { LuCopyright } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="bg-[#537561] mt-20 text-white font-poppins">
      <div className="flex fex-row  px-20 py-12">
        <div className='w-[50%]'>
            <img src={logo} alt="" />
            <h1 className='mt-4'>Dusun Kalijeruk, Kelurahan Banjarasri, Kecamatan Kalibawang,<br></br> Kabupaten Kulonprogo, DIY</h1>
            <div className='mt-4 flex flex-row gap-2'><FaFacebookF /><FaInstagram/><FaWhatsapp/><FaYoutube/> </div>
        </div>
        <div className='w-[50%]'>
            <h1 className='text-[28px] font-semibold'>Hubungi Kami</h1>
            <div className='mt-4 flex flex-row gap-4 items-center'>
                <SiGooglemaps/>
                <p>Kalijeruk, Banjarasri, Kec. Kalibawang, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55672</p>
            </div>
            <div className='mt-4 flex flex-row gap-4 items-center'>
                <MdMessage/>
                <p>-</p>
            </div>
            <div className='mt-4 flex flex-row gap-4 items-center'>
                <BiWorld/>
                <p>Kalijeruk.xyz</p>
            </div>
            <div className='mt-4 flex flex-row gap-4 items-center'>
                <BsTelephoneFill/>
                <p>087543675432</p>
            </div>
        </div>
      </div>
      <div className='py-4 text-center border-t flex flex-row items-center gap-[0.45rem] justify-center'>
        <h1>Copyright</h1>
        <LuCopyright/>
        <h1>2024 KKN UNIT XV.A.1 <a className='text-orange-500 hover:text-orange-100' href="https://uad.ac.id/id/" target='blank'>Universitas Ahmad Dahlan</a></h1>
      </div>
    </div>
  )
}
