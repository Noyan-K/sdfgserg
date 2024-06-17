import dayjs from 'dayjs';
export const bloodGrup = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
export const bloodGrupOptions = bloodGrup.map((data) => {
    return {
        label: data,
        value: data
    }
})

const Gender = ['male', 'female']

export const GenderOptions = Gender.map((data) => {
    return {
        label: data,
        value: data
    }
})
export const daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

export const doctorSpecialistArray = [
    { id: 1, value: "Кардиолог" },
    { id: 2, value: "Дерматолог" },
    { id: 3, value: "Ортопедиялық Хирург", },
    { id: 4, value: "Гинеколог дәрігер" },
    { id: 5, value: "Невропатолог" },
    { id: 6, value: "Офтальмолог" },
    { id: 7, value: "Педиатр" },
    { id: 8, value: "Эндокринолог дәрігер" },
    { id: 9, value: "Гастроэнтеролог" },
    { id: 10, value: "Пульмонолог" },
    { id: 11, value: "Ортопедиялық" }
]

export const doctorSpecialistOptions = doctorSpecialistArray.map(data => {
    return {
        label: data.value,
        value: data.value
    }
});

export const doctorTimeSlot = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM"
]

const appointmentStatus = [
    "pending",
    "scheduled",
    "cancel",
    "confirmed",
    "InProgress",
    "Completed",
    "FollowUp",
    "archived"
]

export const appointemntStatusOption = appointmentStatus.map((item) => {
    return {
        label: item,
        value: item
    }
})

//Daignosis

const medical_diagnoses = [
    "Гипертония",
    "2 Типті Қант Диабеті",
    "Коронарлық Артерия Ауруы",
    "Остеоартрит",
    "Ревматоидты Артрит",
    "Өкпенің созылмалы Обструктивті Ауруы (COPD)",
    "Демікпе",
    "Созылмалы Бүйрек Ауруы",
    "Мигрень",
    "Негізгі Депрессиялық Бұзылыс",
    "Жалпы Мазасыздықтың Бұзылуы",
    "Шизофрения",
    "Биполярлық Бұзылыс",
    "Зейін Тапшылығы / Гиперактивтіліктің Бұзылуы(СДВГ)",
    "Қалқанша Безінің Бұзылуы (Мысалы, Гипотиреоз, Гипертиреоз)",
    "Гастроэзофагеальді Рефлюкс Ауруы (GERD)",
    "Асқазан Жарасы Ауруы",
    "Тітіркенген Ішек Синдромы (IBS)",
    "Крон Ауруы",
    "Ойық Жаралы Колит",
    "Созылмалы Гепатит",
    "Бауыр циррозы",
    "Инсульт",
    "Эпилепсия",
    "Созылмалы Жүрек Жеткіліксіздігі"
]
const medical_diseases = [
    "Гипертония",
    "2 Типті Қант Диабеті",
    "Коронарлық Артерия Ауруы",
    "Остеоартрит",
    "Ревматоидты Артрит",
    "Өкпенің созылмалы Обструктивті Ауруы (COPD)",
    "Демікпе",
    "Созылмалы Бүйрек Ауруы",
    "Мигрень",
    "Негізгі Депрессиялық Бұзылыс",
    "Жалпы Мазасыздықтың Бұзылуы",
    "Шизофрения",
    "Биполярлық Бұзылыс",
    "Зейін Тапшылығы / Гиперактивтіліктің Бұзылуы(СДВГ)",
    "Қалқанша Безінің Бұзылуы (Мысалы, Гипотиреоз, Гипертиреоз)",
    "Гастроэзофагеальді Рефлюкс Ауруы (GERD)",
    "Асқазан Жарасы Ауруы",
    "Тітіркенген Ішек Синдромы (IBS)",
    "Крон Ауруы",
    "Ойық Жаралы Колит",
    "Созылмалы Гепатит",
    "Бауыр циррозы",
    "Инсульт",
    "Эпилепсия",
    "Созылмалы Жүрек Жеткіліксіздігі",
    "Семіздік",
    "Артрит",
    "Деменция",
    "Псориаз",
    "Целиак Ауруы"
];

const medicalCheckupList = [
    "Физикалық Тексеру",
    "Қан Қысымын Өлшеу",
    "Қан Анализі",
    "Холестерин Панелі",
    "Қандағы Глюкоза Сынағы",
    "Толық Қан Анализі (CBC)",
    "Қалқанша Безінің Жұмысын Тексеру",
    "Бауыр Функциясының Сынақтары",
    "Бүйрек Функциясын Тексеру",
    "Зәр анализі",
    "Дене Салмағының Индексін (BMI) Өлшеу",
    "Көру Сынағы",
    "Есту Сынағы",
    "Стоматологиялық Тексеру",
    "Теріні Тексеру",
    "Қатерлі Ісік Скринингтері (Мысалы, Маммограмма, Пап Жағындысы, Простатаға Тән Антиген)",
    "Сүйек Тығыздығын Тексеру",
    "Электрокардиограмма (ЭКГ немесе ЭКГ)",
    "Кеуде Қуысының Рентгенографиясы",
    "Өкпе Функциясын Тексеру",
    "Колоноскопия",
    "Колоректальды Қатерлі Ісікке арналған нәжісті Тексеру",
    "DEXA Сканерлеу (Қос Энергиялы Рентгендік Абсорбциометрия)",
    "АИТВ-Ға Тест",
    "Жыныстық Жолмен Берілетін Инфекцияларға (ЖЖБИ) Скрининг",
    "Иммундау және Вакцинация",
    "Көзді Тексеру",
    "Психологиялық Бағалау",
    "Жалпы Тәжірибелік Дәрігердің жыл сайынғы Тексеруі"
];

const dosageList = [
    "250 mg",
    "1000 mg",
    "75 mg",
    "50 mg",
    "5 mg",
    "150 mg",
    "300 mg",
    "200 mg",
    "10 mg",
    "20 mg"
];
const frequenciesList = [
    "Күніне бір рет (QD)",
    "Күніне екі рет (ӨТІНІМ)",
    "Күніне үш Рет (TID)",
    "Күніне төрт Рет (QID)",
    "Әр 6 Сағат сайын (Q6H)",
    "Қажет болған жағдайда (PRN)",
    "Күн Сайын бір рет (КОД)",
    "Әр 8 Сағат сайын (Q8H)",
    "Әр 12 Сағат сайын (Q12H)",
    "Аптасына бір рет (КВТ)"
];

const patientStatusList = [
    "Тұрақты",
    "Өте ауыр",
    "Ауыр",
    "Күзетіледі",
    "Тұрақсыз",
    "Қалпына келтіру",
    "Сыни, Бірақ Тұрақты",
    "Тек жайлылық Шаралары (CMO)",
    "Жедел",
    "Созылмалы"
];

export const PatientStatus = patientStatusList.map((item) => {
    return {
        label: item,
        value: item
    }
})



export const DiagnosisOptions = medical_diagnoses.map((item) => {
    return { label: item, value: item }
})

export const DiseaseOptions = medical_diseases.map((item) => {
    return { label: item, value: item }
})

export const MedicalCheckupOptions = medicalCheckupList.map((item) => {
    return { label: item, value: item }
})

export const DosageOptions = dosageList.map((item) => {
    return {
        label: item,
        value: item
    }
})

export const FrequencyOptions = frequenciesList.map((item) => {
    return {
        label: item,
        value: item
    }
})

export const DateRangePresets = [
    {
        label: 'Next 3 Days',
        value: [dayjs(), dayjs().add(3, 'd')],
    },
    {
        label: 'Next 7 Days',
        value: [dayjs(), dayjs().add(7, 'd')],
    },
    {
        label: 'Next 10 Days',
        value: [dayjs(), dayjs().add(10, 'd')],
    },
    {
        label: 'Next 14 Days',
        value: [dayjs(), dayjs().add(14, 'd')],
    },
    {
        label: 'Next 30 Days',
        value: [dayjs(), dayjs().add(30, 'd')],
    },
    {
        label: 'Next 2 Month',
        value: [dayjs(), dayjs().add(60, 'd')],
    },
    {
        label: 'Next 3 Month',
        value: [dayjs(), dayjs().add(90, 'd')],
    },
];

export const DatePickerSinglePresets = [
    {
        label: 'Tomorrow',
        value: dayjs().add(1, 'd'),
    },
    {
        label: 'Next 3 Day',
        value: dayjs().add(3, 'd'),
    },
    {
        label: 'Next Week',
        value: dayjs().add(7, 'd'),
    },
    {
        label: 'Next 2 Week',
        value: dayjs().add(15, 'd'),
    },
    {
        label: 'Next Month',
        value: dayjs().add(30, 'd'),
    },
    {
        label: 'Next 2 Month',
        value: dayjs().add(60, 'd'),
    },
    {
        label: 'Next 3 Month',
        value: dayjs().add(90, 'd'),
    },
    {
        label: 'Next 6 Month',
        value: dayjs().add(180, 'd'),
    },
]