const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "about-title": "About TechVerse Innovation",
        "about-description": "At TechVerse Innovation, we're dedicated to democratizing cutting-edge technology for small and medium-sized enterprises across the Philippines. Our mission is to empower local businesses with enterprise-grade technological solutions that were once accessible only to large corporations.",
        "vision-title": "Our Vision",
        "vision-description": "We envision a future where every Philippine business, regardless of size, can harness the power of advanced technology to compete in the global digital economy. By bridging the technology gap, we're helping build a more innovative and prosperous Philippine business landscape.",
        "what-we-do-title": "What We Do",
        "what-we-do-description": "We specialize in implementing three core technologies that are reshaping the business world:",
        "service-blockchain": "Blockchain Solutions",
        "service-blockchain-desc": "Secure, transparent, and efficient systems for supply chain management, payments, and record-keeping that build trust and reduce costs.",
        "service-ai": "Artificial Intelligence",
        "service-ai-desc": "Custom AI solutions that automate processes, provide business insights, and enhance customer experiences for growing companies.",
        "service-iot": "Internet of Things (IoT)",
        "service-iot-desc": "Smart devices and sensors that optimize operations, monitor assets, and provide real-time data for better decision-making.",
        "why-choose-title": "Why Choose Us",
        "why-choose-description": "We understand the unique challenges and opportunities in the Philippine market. Our solutions are:",
        "why-choose-1": "Tailored to local business needs and practices",
        "why-choose-2": "Scalable to grow with your business",
        "why-choose-3": "Supported by local expertise and 24/7 assistance",
        "why-choose-4": "Designed with cost-efficiency in mind",
        "why-choose-5": "Compliant with Philippine regulations"
    },
    zh: {
        "nav-home": "首页",
        "nav-about": "关于",
        "nav-services": "服务",
        "nav-contact": "联系我们",
        "about-title": "关于 TechVerse Innovation",
        "about-description": "在 TechVerse Innovation，我们致力于为菲律宾的中小企业提供尖端技术。我们的使命是通过企业级技术解决方案，帮助本地企业在全球数字经济中竞争。",
        "vision-title": "我们的愿景",
        "vision-description": "我们希望每个菲律宾企业都能利用先进技术在全球竞争。通过弥合技术鸿沟，我们正在建立一个更具创新性和繁荣的商业环境。",
        "what-we-do-title": "我们的工作",
        "what-we-do-description": "我们专注于实施三种正在改变商业世界的核心技术：",
        "service-blockchain": "区块链解决方案",
        "service-blockchain-desc": "为供应链管理、支付和记录保持提供安全、透明和高效的系统。",
        "service-ai": "人工智能",
        "service-ai-desc": "提供自动化流程、商业洞察和客户体验增强的定制AI解决方案。",
        "service-iot": "物联网（IoT）",
        "service-iot-desc": "智能设备和传感器可优化运营、监控资产并提供实时数据。",
        "why-choose-title": "为什么选择我们",
        "why-choose-description": "我们了解菲律宾市场的独特挑战和机遇。我们的解决方案：",
        "why-choose-1": "适应本地业务需求",
        "why-choose-2": "可扩展以支持业务增长",
        "why-choose-3": "提供 24/7 本地支持",
        "why-choose-4": "经济高效",
        "why-choose-5": "符合菲律宾法规"
    },
    jp: {
        "nav-home": "ホーム",
        "nav-about": "会社概要",
        "nav-services": "サービス",
        "nav-contact": "お問い合わせ",
        "about-title": "TechVerse Innovationについて",
        "about-description": "TechVerse Innovationでは、フィリピンの中小企業に最先端の技術を提供することに尽力しています。私たちの使命は、これまで大企業だけが利用できたエンタープライズレベルの技術ソリューションを、地域のビジネスにも提供することです。",
        "vision-title": "私たちのビジョン",
        "vision-description": "私たちは、フィリピンのすべての企業が、規模に関係なく、最新技術を活用してグローバルデジタル経済で競争できる未来を想像しています。技術格差を埋めることで、より革新的で繁栄するフィリピンのビジネス環境を築いています。",
        "what-we-do-title": "私たちの事業",
        "what-we-do-description": "私たちは、ビジネスの世界を変革する 3 つの主要技術の実装を専門としています。",
        "service-blockchain": "ブロックチェーンソリューション",
        "service-blockchain-desc": "サプライチェーン管理、支払い、記録保持のための、安全で透明性の高い効率的なシステムを提供します。",
        "service-ai": "人工知能 (AI)",
        "service-ai-desc": "業務の自動化、ビジネスインサイトの提供、顧客体験の向上を実現するカスタム AI ソリューションを提供します。",
        "service-iot": "モノのインターネット (IoT)",
        "service-iot-desc": "スマートデバイスとセンサーを活用し、業務の最適化、資産の監視、リアルタイムデータの提供を行います。",
        "why-choose-title": "なぜ私たちを選ぶのか",
        "why-choose-description": "私たちは、フィリピン市場の特有の課題と機会を理解しています。私たちのソリューションは以下の通りです。",
        "why-choose-1": "地域のビジネスニーズに適応",
        "why-choose-2": "ビジネスの成長に合わせたスケーラブルな設計",
        "why-choose-3": "24/7 のローカルサポートを提供",
        "why-choose-4": "コスト効率の良いソリューション",
        "why-choose-5": "フィリピンの規制に準拠"
    }
};

document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    Object.keys(translations[selectedLanguage]).forEach(id => {
        document.getElementById(id).textContent = translations[selectedLanguage][id];
    });
});