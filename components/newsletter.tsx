export default function Proposal() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div>

					{/* CTA box */}
					<div className="relative bg-blue-500 rounded-xl py-10 px-8 md:py-16 md:px-12 my-6 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

						{/* Background illustration */}
						<div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
							<svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
										<stop stopColor="#DFDFDF" offset="0%" />
										<stop stopColor="#4C4C4C" offset="44.317%" />
										<stop stopColor="#333" offset="100%" />
									</radialGradient>
								</defs>
								<g fill="none" fillRule="evenodd">
									<g fill="#FFF">
										<ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
										<ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
										<ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
										<ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
										<ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
										<ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
										<ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
										<ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
									</g>

									{/* ФЛАГ ФРАНЦИИ НА ФОНЕ ПИСЬМА */}


								</g>
							</svg>
						</div>


						<div className="flex flex-row lg:flex-row justify-center items-center">
							<div className="flex flex-row flex-nowrap w-1/2">
								<h3 className="h3 text-white mb-2">Подать заявку можно здесь</h3>
								<img className="sm:w-24" src="/images/icon_contract.png" alt="contract document" />
							</div>
							<div className="w-1/2">
								<div className="flex flex-col sm:flex-row justify-end max-w-xs mx-auto sm:max-w-md lg:mx-0">
									<img className="w-16" src="/fonts/icon_email.png" alt="email" />
									<a className="btn text-white bg-purple-700 hover:bg-purple-500 shadow rounded-3xl w-2/5" href="mailto:contact@france-experience.fr?subject=Заявка&body=%0AВаше%20имя:%0A%0AВаша%20фамилия:%0A%0AДата%20рождения:%0A%0AСтрана%20проживания:%0A%0AГород%20проживания:%0A%0AОпишите%20ваш%20запрос:%0A%0A">Подать</a>
								</div>
							</div>
						</div>



					</div>

				</div>
			</div>
		</section>
	)
}