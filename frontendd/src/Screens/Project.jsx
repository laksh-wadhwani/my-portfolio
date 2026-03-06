import React, { useEffect, useState } from "react";
import IconButton from "../Components/IconButton";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router";
import axios from "axios";
import { BackendURL } from "../BackendContext";

const Project = () => {

  const API = BackendURL();
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/admin/get-project-data/${slug}`)
      .then((response) => setData(response.data))
      .catch((error) =>
        console.error(
          "Getting error while fetching the specific project details: ",
          error,
        ),
      );
  }, [slug]);

  return (
    <React.Fragment>
      <div className="w-full pb-20 flex flex-col items-center">
        <div className="w-[80%] mt-32 py-12 px-20 rounded-md bg-[#1d1d1d] shadow-2xl flex flex-col gap-12">
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <h2 className="font-serif font-bold text-5xl tracking-tight">
                {data?.name}
              </h2>
              <div className="w-fit flex gap-4">
                {data?.github_url? <IconButton icon={FaGithub} size={24} to={data?.github_url} />:null}
                {data?.live_url? <IconButton icon={IoArrowRedoOutline} size={24} to={data?.live_url} />:null}
              </div>
            </div>
            <p className="font-seirf font-light text-xl text-justify leading-8 p-1">
              {data?.description}
            </p>
            <div className="w-full flex gap-2">
              {data?.tech_stack.map((tech) => (
                <span className="font-serif font-xs capitalize text-gray-300 border border-gray-500 py-1 px-3 rounded-full shadow-lg transiton-all duration-500 ease-in-out hover:bg-[#dac5a70d] hover:text-[#dac5a7] hover:scale-105">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-4xl font-semibold">
              Screenshots of Project
            </h4>
            <div>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-xl"
              >
                {data?.screenshots.map((picture) => (
                  <SwiperSlide>
                    <img
                      src={picture}
                      alt="Screenshot 1"
                      className="w-full h-150 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
