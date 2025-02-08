const aiTranslations = {
    en: {
        "ai-solutions-title": "AI Solutions",
        "ai-solutions-description": "At TechVerse, we specialize in delivering AI-powered solutions that help businesses optimize workflows, reduce costs, and enhance decision-making. Our AI tools can adapt to your specific business needs, making your operations more efficient and future-ready.",
        "ai-solutions-list-item-1": "AI-driven Automation",
        "ai-solutions-list-item-2": "Predictive Analytics",
        "ai-solutions-list-item-3": "Natural Language Processing (NLP)",
        "ai-solutions-list-item-4": "Machine Learning Models",
        "ai-solutions-list-item-5": "Data Insights & Reporting",
        "ai-solutions-why-choose": "Why Choose Our AI Solutions?",
        "ai-solutions-why-choose-description": "We ensure that every AI solution is tailored to your business, with seamless integration, continuous learning, and ongoing support. Whether you're looking to automate routine tasks or gain actionable insights from your data, TechVerse has the expertise to make it happen.",
        "back-to-services": "Back to Services",
        "section-title": "Our AI Solutions Include:",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-contact": "Contact"
    },
    zh: {
        "ai-solutions-title": "人工智能解决方案",
        "ai-solutions-description": "在 TechVerse，我们专注于提供 AI 驱动的解决方案，帮助企业优化工作流程、降低成本并增强决策能力。我们的 AI 工具可以适应您的特定业务需求，使您的运营更高效、更具前瞻性。",
        "ai-solutions-list-item-1": "AI 驱动的自动化",
        "ai-solutions-list-item-2": "预测分析",
        "ai-solutions-list-item-3": "自然语言处理 (NLP)",
        "ai-solutions-list-item-4": "机器学习模型",
        "ai-solutions-list-item-5": "数据分析与报告",
        "ai-solutions-why-choose": "为什么选择我们的 AI 解决方案？",
        "ai-solutions-why-choose-description": "我们确保每个 AI 解决方案都符合您的业务需求，实现无缝集成、持续学习和长期支持。无论您是想自动化日常任务，还是从数据中获取可操作的见解，TechVerse 都有专业知识来帮助您实现。",
        "back-to-services": "返回服务页面",
        "section-title": "我们的人工智能解决方案包括：",
        "nav-home": "首页",
        "nav-about": "关于",
        "nav-services": "服务",
        "nav-contact": "联系"
    },
    jp: {
        "ai-solutions-title": "AI ソリューション",
        "ai-solutions-description": "TechVerse では、ワークフローの最適化、コスト削減、意思決定の向上を支援する AI ソリューションを提供しています。 当社の AI ツールは、特定のビジネスニーズに適応し、より効率的で将来に備えた運用を実現します。",
        "ai-solutions-list-item-1": "AI 主導の自動化",
        "ai-solutions-list-item-2": "予測分析",
        "ai-solutions-list-item-3": "自然言語処理 (NLP)",
        "ai-solutions-list-item-4": "機械学習モデル",
        "ai-solutions-list-item-5": "データ分析とレポート",
        "ai-solutions-why-choose": "なぜ当社の AI ソリューションを選ぶのか？",
        "ai-solutions-why-choose-description": "当社は、お客様のビジネスに合わせた AI ソリューションを提供し、シームレスな統合、継続的な学習、そしてサポートを保証します。 日常業務の自動化を目指している場合でも、データから有益な洞察を得たい場合でも、TechVerse はその実現をサポートします。",
        "back-to-services": "サービスに戻る",
        "section-title": "当社のAIソリューションには以下が含まれます：",
        "nav-home": "ホーム",
        "nav-about": "会社概要",
        "nav-services": "サービス",
        "nav-contact": "お問い合わせ"
    }
};

document.getElementById("languageSwitcher").addEventListener("change", (event) => {
    const language = event.target.value;
    translateAiSolutionsPage(language);
});

function translateAiSolutionsPage(language) {
    for (const key in aiTranslations[language]) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = aiTranslations[language][key];
        }
    }
}