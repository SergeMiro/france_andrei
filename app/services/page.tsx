
export const metadata = {
	title: 'Services',
	description: 'Services of organistion',
 }

import StageIcon from '@/public/fonts/stage_icon.png'
import MovingIcon from '@/public/fonts/moving_icon.png'
import EducIcon from '@/public/fonts/educ_icon.png'
import WorkIcon from '@/public/fonts/work_icon.png'
import AdminQuest from '@/public/fonts/admin_voprosy_icon.png'

import React from 'react';
import Service from '@/components/service'

export default function Services(){
	return(
		<>
		<Service
        iconSrc={StageIcon}
        title="Оплачиваемая стажировка во Франции"
        description="Это прекрасная возможность провести во Франции от 2 до 6 месяцев, приобрести интернациональный опыт, усовершенствовать свои языковые навыки и познакомиться с этой замечательной страной. Стажировки проходят в лучших отелях, ресторанах и кемпингах в разных регионах Франции. Стажер получает вознаграждение в размере не меньше, чем 623 € в месяц."
        sectionStyle="bg-white"
		  isListVisible="hidden"
      />
		<Service
        iconSrc={MovingIcon}
        title="Переезд во Францию"
        description="Консультируем по возможностям переезда во Францию в зависимости от вашей ситуации: высококвалифицированным специалистам доступны разнообразные программы, студенты могут воспользоваться обширным выбором образовательных возможностей, а предприниматели получают поддержку и стимул для развития своего бизнеса."
        sectionStyle="bg-gray-100"
		  isListVisible="hidden"
      />
		<Service
        iconSrc={EducIcon}
        title="Обучение во Франции"
        description="Мы предлагаем услуги по записи на языковые и профессиональные курсы, помогаем в зачислении в высшие учебные заведения страны, а также помогаем подобрать школу для ребенка. С нами вы можете быстрее и эффективнее пройти все этапы записи в учебные заведения Франции, а также подобрать лучшее заведение под ваш запрос."
        sectionStyle="bg-white"
		  isListVisible="hidden"
      />
		<Service
        iconSrc={WorkIcon}
        title="Работа во Франции"
        description="Мы занимаемся помощью в оформлении рабочей визы, а также подбором работодателя для тех, кто только хочет приехать или уже находится во Франции. Независимо от того, являетесь ли вы высококвалифицированным специалистом, студентом или предпринимателем, мы предоставим вам все необходимые ресурсы и знания для успешного старта во французском обществе."
        sectionStyle="bg-gray-100"
		  isListVisible="hidden"
      />
		<Service
        iconSrc={AdminQuest}
        title="Административные вопросы"
        description="Мы предоставляем помощь в :"
        sectionStyle="bg-white"
		  isListVisible="block"
		  listItem1="оформлении документов для любых типов виз"
		  listItem2="запись в учебные заведения"
      />
    </>
	);
}