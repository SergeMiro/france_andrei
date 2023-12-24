import React from 'react';

import Image from 'next/image'
import StageIcon from '@/public/fonts/stage_icon.png'

export default function Services() {
  return (
    <section className="bg-gray-100">
      <div className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className='flex flex-row flex-nowrap items-center text-start'>
			 	<Image className="md:max-w-full mr-6 rounded h-auto transform animate-float" src={StageIcon} width={150} alt="stage image" />
            <h1 className="text-3xl font-extrabold text-purple-800 sm:text-4xl"> Оплачиваемая стажировка во Франции </h1>
          </div>

          <p className="mt-4 text-lg text-gray-500">
            Это прекрасная возможность провести во Франции от 2 до 6 месяцев, приобрести интернациональный опыт, усовершенствовать свои языковые навыки и познакомиться с этой замечательной страной. Стажировки проходят в лучших отелях, ресторанах и кемпингах в разных регионах Франции. Стажер получает вознаграждение в размере не меньше, чем 623 € в месяц.
          </p>
      </div>


    </section>
  );
}
