import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Link } from 'react-router-dom';

const Template = ({ item , SetBackImage}) => {



    const itemOver = (eve,itm) => {
        let descDom =  eve.target.children[0].children
        SetBackImage(itm.back_image)
        console.log(descDom[1])
            // descDom[1].classList.add("animate-paraSlide")
            descDom[1].classList.remove("opacity-0")
            descDom[0].classList.add("bottom-36")
    }

    const itemUnOver = (eve) => {
        let descDom =  eve.target.children[0].children
        // descDom[1].classList.remove("animate-paraSlide")
        descDom[1].classList.add("opacity-0")
        descDom[0].classList.remove("bottom-36")
    }

    return (
        <>

            <Link to={`./${item.title}`}   className="grid h-screen cursor-pointer" >
                <div onMouseOver={(event)=>itemOver(event,item)} onMouseLeave={(event)=> itemUnOver(event)  } className='bg-gray-900 relative bg-opacity-0  transition ease-linear delay-300 bg-opacity h-full border-r border-zinc-400 hover:bg-opacity-50'>
                    <div className='absolute bottom-10 left-4 '>
                        <h1 className='text-4xl font-bold absolute'>{item.title}</h1>
                        <span className='opacity-0'>
                            <p className='my-4'>{item.desc}</p>
                            <a href={item.link} className='text-xl font-semibold anim-link'>Discover <EastRoundedIcon /></a>
                        </span>


                    </div>
                </div>
            </Link>

        </>
    )

}

export default Template;