export default function Profil() {
    return (
        <div className="max-w-[1380px] mx-auto mt-20 font-poppins">
            <h1 className="text-center text-[28px] font-bold text-black">Ayo Kunjungi Desa Kami</h1>
            <p className="text-center">Dengan mengusung desa harmonis, kami siap menjadi yang terdepan.</p>
            <div className="w-[1020px] mx-auto mt-4 flex flex-row">
                <div className="w-[50%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8">
                    <h1 className="text-center text-[20px] font-semibold text-[#537561] mb-4">Sejarah Kalijeruk</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur ratione nesciunt dolores adipisci, cupiditate sint? Ipsa voluptate dolore maxime reiciendis. Eaque, ad suscipit, autem et totam reiciendis doloribus dignissimos, animi tenetur perspiciatis vitae soluta quisquam ex officiis dolorem neque cupiditate! Eaque odio laboriosam inventore totam consequatur fugiat ipsa? Tempora!   </p>
                </div>
                <div className="w-[50%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <iframe width="515" height="315" src="https://www.youtube.com/embed/WQvUW4QdWqA?si=QkEaEOAl_pmbZvUH" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}
