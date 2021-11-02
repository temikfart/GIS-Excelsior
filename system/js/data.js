// Название модулей

let mass_name_modules = ['Жилой модуль',
                        'Космодром',
                        'Вышки связи',
                        'Плантации',
                        'Мусорные полигоны',
                        'Дороги для марсоходов',
                        'Производственные предприятия',
                        'Военные базы',
                        'Спортивные модули',
                        'Административные модули',
                        'Солнечные электростанции',
                        'Ремонтные мастерские',
                        'Досуговые учреждения',
                        'Горнодобывающие шахты',
                        'Медицинские модули',
                        'Образовательные модули'];

// Фотографии модулей

let mass_images_moduls = [  'img/фото/residential_complex.jpg',
                            'img/фото/cosmodrome.jpg',
                            'img/фото/communication_towers.jpg',
                            'img/фото/plantations.jpg',
                            'img/фото/landfill.jpg',
                            'img/фото/rover_roads.jpg',
                            'img/фото/manufacturing_enterprises.jpg',
                            'img/фото/military_bases.jpg',
                            'img/фото/sports_modules.jpg',
                            'img/фото/administrative_building.jpg',
                            'img/фото/solar_panels.jpg',
                            'img/фото/repair_shops.jpg',
                            'img/фото/leisure_facilities.jpg',
                            'img/фото/-----',
                            'img/фото/medical_modules.jpg',
                            'img/фото/educational_modules.jpg'];

// Маркеры модулей

let mass_imges_markers = ['img/модули/маркеры/1.png',
                        'img/модули/маркеры/2.png',
                        'img/модули/маркеры/3.png',
                        'img/модули/маркеры/4.png',
                        'img/модули/маркеры/5.png',
                        'img/модули/маркеры/6.png',
                        'img/модули/маркеры/7.png',
                        'img/модули/маркеры/8.png',
                        'img/модули/маркеры/9.png',
                        'img/модули/маркеры/10.png',
                        'img/модули/маркеры/11.png',
                        'img/модули/маркеры/12.png',
                        'img/модули/маркеры/13.png',
                        'img/модули/маркеры/14.png',
                        'img/модули/маркеры/15.png',
                        'img/модули/маркеры/16.png'];

// Описание модулей

let mass_module_description = [ '<b>Жилой модуль.</b> Небольшой модуль, может полноценно обеспечивать жилье для 6-10 колонистов, включает в себя кровати, ящики для хранения вещей, комнату для поддержания гигиены и т.д.',
                                '<b>Космодром.</b> Достаточно обширная территория, где расположен ЦУП, взлетно-посадочные площадки, здания для обслуживания космодрома и проживания персонала, хранилища и центр сборки и ремонта ракет.',
                                '<b>Центр связи.</b> Центр связи со спутниками, также позволяет связаться с удаленными объектами колонии.',
                                '<b>Растительный модуль.</b> Модуль, где выращиваются и исследуются растения. В большинстве модулей выращивается пища для колонистов.',
                                '<b>Мусорный полигон.</b> Открытое пространство, где выгружают мусорные отходы в виде контейнеров. На территории также расположен мусороперерабатывающий завод.',
                                '<b>Дорога.</b> Дорожное покрытие, которое позволяет с большей безопасностью передвигаться на марсоходах и пешком между объектами.',
                                '<b>Производственное предприятие.</b> Перерабатывает сырье из карьеров, плантаций и др. в продукт (еду, материалы и изделия).',
                                '<b>Военная база.</b> Служат для обеспечения безопасности колонии и сохраняют порядок в ней, то есть выполняют роль полиции в том числе.',
                                '<b>Спортивный модуль.</b> Модуль который выполняет все функции небольшого спортзала, где колонисты могут поддерживать спортивную форму и не допускать атрофию мышц.',
                                '<b>Административный модуль.</b> Здесь работает управление колонией. Они планируют ее развитие, а также решают проблемы населения. В распоряжении модуля имеются все необходимые помещения, как совещательные комнаты, так и управляющие колонией специализированные помещения.',
                                '<b>Солнечная электростанция.</b> Солнечные панели размещенные достаточно плотно. Вырабатывают электроэнергию и сохраняют ее в аккумуляторах. Полностью автоматическая система.',
                                '<b>Ремонтная мастерская.</b> Ангар, где есть необходимое оборудование для починки любой вещи: от часов до марсоходов.',
                                '<b>Досуговое учреждение.</b> Это могут быть кинокомнаты, теннисные корты, игровые и т.п. Здесь колонисты могут отвлечься от работы и отдохнуть. Найти себе хобби',
                                '<b>Карьер.</b> Удаленная от колонии территория, где добываются полезные ископаемые и грунт. Добытое сырье отправляется на перерабатывающие заводы.',
                                '<b>Медицинский модуль.</b> Большой модуль, где можно провести любые анализы или операцию. В модуле также принимаются роды. Имеется крематорий.',
                                '<b>Образовательный модуль.</b> Модуль, где помещается несколько классов. Имеются комнаты для занятий группами в любых сферах: от математики до астрономии.'];

// Критерии модулей

let mass_module_criteria = [[1, 3, 'I-III', 3, '3-4', '3-4'],
                            [1, 2, 'II-III', 1, 1, 2],
                            [2, 2, 'I-II', 3, 3, 3],
                            [2, 3, 'II', 3, 2, 3],
                            [3, 2, 'II-III', 2, 2, 3],
                            [3, 1, 'II', 3, 4, 0],
                            [3, 1, 'II-III', 2, 2, '2-3'],
                            [3, 1, 'I-III', 1, 2, '2-3'],
                            [2, 2, 'I-III', 3, 4, 4],
                            [3, 1, 'I-III', 3, 3, 4],
                            [1, 3, 'I-II', 2, 3, 1],
                            [3, 1, 'II-III', 3, 3, 3],
                            [3, 1, 'II-III', 3, 3, 3],
                            [3, 1, 'II-III', 1, 1, '2-3'],
                            [2, 2, 'II-III', 3, 3, 3],
                            [3, 1, 'II-III', 3, 3, 4]];