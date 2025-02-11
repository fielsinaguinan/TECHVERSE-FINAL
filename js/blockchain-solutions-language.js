const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "blockchain-title": "Blockchain Consulting",
        "blockchain-description": "TechVerse helps businesses leverage blockchain technology to enhance transparency, security, and efficiency. Our experts provide consulting services to integrate blockchain into your operations, ensuring the future of your business is secure and decentralized.",
        "section-title": "Our Blockchain Services Include:",
        "service-1": "Smart Contract Development",
        "service-2": "Blockchain Integration",
        "service-3": "Security Audits & Compliance",
        "service-4": "Custom Blockchain Solutions",
        "service-5": "Decentralized Application (DApp) Development",
        "why-choose": "Why Choose Our Blockchain Consulting?",
        "why-choose-desc": "With expertise in blockchain technology, we provide custom solutions that align with your business goals. Our team ensures a seamless integration that boosts security, lowers transaction costs, and creates long-term value for your enterprise.",
        "back-button": "Back to Services"
    },
    zh: {
        "nav-home": "首页",
        "nav-about": "关于",
        "nav-services": "服务",
        "nav-contact": "联系我们",
        "blockchain-title": "区块链咨询",
        "blockchain-description": "TechVerse帮助企业利用区块链技术提高透明度、安全性和效率。我们的专家提供咨询服务，将区块链集成到您的业务运营中，确保您的企业未来安全去中心化。",
        "section-title": "我们的区块链服务包括：",
        "service-1": "智能合约开发",
        "service-2": "区块链集成",
        "service-3": "安全审计与合规",
        "service-4": "定制区块链解决方案",
        "service-5": "去中心化应用（DApp）开发",
        "why-choose": "为什么选择我们的区块链咨询？",
        "why-choose-desc": "凭借在区块链技术方面的专业知识，我们提供符合您业务目标的定制解决方案。我们的团队确保无缝集成，提高安全性，降低交易成本，并为您的企业创造长期价值。",
        "back-button": "返回服务"
    },
    jp: {
        "nav-home": "ホーム",
        "nav-about": "私たちについて",
        "nav-services": "サービス",
        "nav-contact": "お問い合わせ",
        "blockchain-title": "ブロックチェーン コンサルティング",
        "blockchain-description": "TechVerseは、企業がブロックチェーン技術を活用して透明性、安全性、効率性を向上させるのを支援します。私たちの専門家は、ブロックチェーンをビジネスに統合するためのコンサルティングサービスを提供し、安全で分散化された未来を保証します。",
        "section-title": "当社のブロックチェーンサービスには以下が含まれます：",
        "service-1": "スマートコントラクト開発",
        "service-2": "ブロックチェーン統合",
        "service-3": "セキュリティ監査とコンプライアンス",
        "service-4": "カスタムブロックチェーンソリューション",
        "service-5": "分散型アプリケーション（DApp）開発",
        "why-choose": "なぜ当社のブロックチェーン コンサルティングを選ぶのか？",
        "why-choose-desc": "ブロックチェーン技術の専門知識を活かし、ビジネス目標に合わせたカスタムソリューションを提供します。当社のチームは、シームレスな統合を確保し、セキュリティを強化し、取引コストを削減し、企業の長期的な価値を創造します。",
        "back-button": "サービスに戻る"
    }
};

document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    document.getElementById('blockchain-title').textContent = translations[selectedLanguage]['blockchain-title'];
    document.getElementById('blockchain-description').textContent = translations[selectedLanguage]['blockchain-description'];
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
