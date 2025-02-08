const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "iot-title": "IoT Solutions",
        "iot-description": "At TechVerse, we provide innovative Internet of Things (IoT) solutions that help businesses connect their devices, enhance operational efficiency, and optimize workflows. Our solutions ensure that your operations are equipped with the latest IoT technology to stay ahead in a rapidly evolving market.",
        "section-title": "Our IoT Solutions Include:",
        "service-1": "Smart Device Integration",
        "service-2": "IoT Network Architecture",
        "service-3": "Real-time Data Monitoring",
        "service-4": "Predictive Maintenance",
        "service-5": "Connected Infrastructure",
        "why-choose": "Why Choose Our IoT Solutions?",
        "why-choose-desc": "Our IoT solutions are designed to integrate seamlessly with your existing infrastructure. We ensure scalability, flexibility, and security, helping your business adapt to new challenges and technologies while improving efficiency and driving innovation.",
        "back-button": "Back to Services"
    },
    zh: {
        "nav-home": "首页",
        "nav-about": "关于",
        "nav-services": "服务",
        "nav-contact": "联系我们",
        "iot-title": "物联网解决方案",
        "iot-description": "在TechVerse，我们提供创新的物联网（IoT）解决方案，帮助企业连接设备，提高运营效率并优化工作流程。我们的解决方案确保您的运营配备最新的物联网技术，以在快速发展的市场中保持领先。",
        "section-title": "我们的物联网解决方案包括：",
        "service-1": "智能设备集成",
        "service-2": "物联网网络架构",
        "service-3": "实时数据监控",
        "service-4": "预测性维护",
        "service-5": "连接基础设施",
        "why-choose": "为什么选择我们的物联网解决方案？",
        "why-choose-desc": "我们的物联网解决方案旨在与您现有的基础设施无缝集成。我们确保可扩展性、灵活性和安全性，帮助您的企业适应新挑战和技术，同时提高效率并推动创新。",
        "back-button": "返回服务"
    },
    jp: {
        "nav-home": "ホーム",
        "nav-about": "私たちについて",
        "nav-services": "サービス",
        "nav-contact": "お問い合わせ",
        "iot-title": "IoTソリューション",
        "iot-description": "TechVerseでは、ビジネスのデバイスを接続し、運用効率を向上させ、ワークフローを最適化する革新的なモノのインターネット（IoT）ソリューションを提供しています。当社のソリューションは、急速に進化する市場で競争力を維持できるよう、最新のIoT技術を備えています。",
        "section-title": "当社のIoTソリューションには以下が含まれます：",
        "service-1": "スマートデバイス統合",
        "service-2": "IoTネットワークアーキテクチャ",
        "service-3": "リアルタイムデータ監視",
        "service-4": "予測メンテナンス",
        "service-5": "接続されたインフラストラクチャ",
        "why-choose": "なぜ当社のIoTソリューションを選ぶのか？",
        "why-choose-desc": "当社のIoTソリューションは、お客様の既存インフラストラクチャとシームレスに統合できるよう設計されています。スケーラビリティ、柔軟性、およびセキュリティを確保し、新しい課題や技術に適応しながら、効率を向上させ、イノベーションを推進します。",
        "back-button": "サービスに戻る"
    }
};

document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    document.getElementById('iot-title').textContent = translations[selectedLanguage]['iot-title'];
    document.getElementById('iot-description').textContent = translations[selectedLanguage]['iot-description'];
    document.querySelector('.section-title').textContent = translations[selectedLanguage]['section-title'];

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`service-${i}`).textContent = translations[selectedLanguage][`service-${i}`];
    }

    document.getElementById('why-choose').textContent = translations[selectedLanguage]['why-choose'];
    document.getElementById('why-choose-desc').textContent = translations[selectedLanguage]['why-choose-desc'];
    document.getElementById('back-button').textContent = translations[selectedLanguage]['back-button'];

    document.getElementById('nav-home').textContent = translations[selectedLanguage]['nav-home'];
    document.getElementById('nav-about').textContent = translations[selectedLanguage]['nav-about'];
    document.getElementById('nav-services').textContent = translations[selectedLanguage]['nav-services'];
    document.getElementById('nav-contact').textContent = translations[selectedLanguage]['nav-contact'];
});