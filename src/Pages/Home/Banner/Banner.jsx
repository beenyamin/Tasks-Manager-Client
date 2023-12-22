import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="  lg:py-28 py-14 md:py-14 bg-[url('https://demoapus1.com/jobtex-new/wp-content/uploads/2023/06/slider81.jpg')]">
                <div className=" flex-col items-end lg:flex-row-reverse ">
                    
                    <div className="text-center pt-10">
                        <h1 className="lg:text-3xl text-2xl font-bold text-white ">Effortless Task Management <br /> for Enhanced Productivity</h1>
                        <p className="py-3 lg:text-md text-white ">Optimize tasks effortlessly on our platform. <br /> Boost productivity, streamline projects,<br /> and stay organized. Sign up now <br /> for efficient task management!</p>
                        
                       <Link to='/login'> <button className="btn bg-white border rounded-full  border-[#14a077] hover:bg-[#14a077] hover:text-white">Let’s Explore</button></Link>
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;