// Privacy Policy page — shared component, content driven by lang prop

const PrivacyData = {
  en: {
    lang: "en",
    altLang: "ko",
    altHref: "privacy-ko.html",
    altLabel: "한국어",
    title: "Privacy Policy for Friddy",
    eyebrow: "Legal",
    meta: [
      { k: "Effective date", v: "May 5, 2026" },
      { k: "Operator", v: "Everything Essential" },
      { k: "Service name", v: "Friddy" },
      { k: "Contact", v: "<a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>" },
    ],
    intro: [
      "Friddy is an AI-powered kitchen, grocery, and food-planning application operated by <strong>Everything Essential</strong>. Friddy helps users manage kitchen inventory, track expiration dates, generate recipe and shopping recommendations, compare grocery options, analyze receipts, and improve grocery spending decisions.",
      "By accessing or using Friddy, you agree to the collection and use of information in accordance with this Privacy Policy.",
    ],
    sections: [
      {
        n: "1", t: "Information We Collect",
        lead: "We collect information to provide, maintain, personalize, secure, and improve Friddy.",
        sub: [
          { t: "1.1 Account Information",
            body: "When you create or use a Friddy account, we may collect:",
            list: [
              "Name or display name",
              "Email address",
              "Phone number, if provided",
              "Login and authentication information",
              "Profile preferences, such as language, household size, budget range, dietary preferences, allergy information, and grocery preferences",
              "Subscription or premium status",
            ]},
          { t: "1.2 Kitchen and Inventory Data",
            body: "To provide Friddy's inventory and food-planning features, we may collect information you enter or generate in the app, including:",
            list: [
              "Food items in your kitchen inventory",
              "Quantity, unit, category, and storage location",
              "Expiration dates or estimated shelf life",
              "Food status, such as fresh, expiring soon, expired, or consumed",
              "Reorder preferences",
              "Notes, tags, or custom item details",
            ]},
          { t: "1.3 Grocery, Shopping, and Budget Data",
            body: "To support grocery planning, price comparison, and smart basket optimization, we may collect:",
            list: [
              "Shopping list items",
              "Grocery budget preferences",
              "Preferred grocery stores or platforms",
              "Purchase history entered or confirmed by you",
              "Estimated prices, selected offers, and basket recommendations",
              "Store ratings or feedback submitted by you",
            ]},
          { t: "1.4 Receipt and Image Data",
            body: "If you use receipt scanning or purchase verification features, we may collect:",
            list: [
              "Photos or images of receipts that you upload",
              "Receipt text extracted from the image",
              "Purchased item names, quantities, prices, store names, purchase dates, and totals",
              "Matching results between your receipt and shopping list",
              "Information needed to update your inventory after purchase",
            ],
            footer: "You should avoid uploading receipts that contain unnecessary sensitive information. If possible, crop or hide information not needed for purchase verification." },
          { t: "1.5 AI Interaction Data",
            body: "Friddy uses Anthropic's Claude API for recipe analysis and Google's Gemini API for receipt analysis. Both providers contractually agree not to use data submitted through their APIs to train their models. Data sent to these providers is processed only to generate the specific output requested by the user and is not retained by the providers beyond their stated retention periods.",
            extra: "Depending on the AI feature, we may process:",
            list: [
              "Your inventory data",
              "Dietary preferences and allergy settings",
              "Shopping list data",
              "Receipt-related data",
              "Budget preferences",
              "User prompts or feedback given to AI features",
              "AI-generated recommendations and outputs",
            ]},
          { t: "1.6 Location Data",
            body: "Friddy may request general location information to improve store availability, grocery recommendations, regional pricing, or market-specific features. We may collect:",
            list: [
              "Country, city, or approximate region",
              "Preferred shopping area",
              "Store availability near your selected area",
            ],
            footer: "Friddy does <strong>not</strong> require continuous real-time location tracking for core kitchen and grocery features unless a specific feature clearly asks for it and you grant permission." },
          { t: "1.7 Usage, Device, and Technical Data",
            body: "We may automatically collect technical and usage information, including:",
            list: [
              "Device type and operating system",
              "App version",
              "IP address",
              "Crash logs and diagnostic data",
              "Feature usage events",
              "Performance data",
              "Authentication and security logs",
              "Approximate session activity",
            ],
            footer: "This information helps us maintain app stability, detect abuse, improve user experience, and secure the Service." },
        ],
      },
      {
        n: "2", t: "How We Use Your Information",
        lead: "We use the information we collect for the following purposes:",
        sub: [
          { t: "2.1 To Provide Core App Features",
            body: "We use your data to:",
            list: ["Create and manage your account","Store and display your kitchen inventory","Track expiration dates","Generate recipe suggestions","Build shopping lists","Recommend grocery purchases","Analyze receipts","Update your inventory after confirmed purchases","Provide spending and waste insights"] },
          { t: "2.2 To Personalize Recommendations",
            body: "We may use your information to personalize:",
            list: ["Recipe recommendations","Expiring-food alerts","Shopping suggestions","Budget-aware grocery plans","Store or product recommendations","Smart basket optimization results","Reorder reminders"] },
          { t: "2.3 To Provide AI-Powered Features",
            body: "We may use your data to generate AI-assisted outputs, including:",
            list: ["Meal ideas based on inventory","Grocery optimization suggestions","Receipt review results","Budget-saving recommendations","Food waste reduction insights","Personalized shopping plans"],
            footer: "AI-generated results may be inaccurate or incomplete. You should review recommendations before relying on them, especially for allergies, dietary restrictions, prices, or purchase decisions." },
          { t: "2.4 To Process Premium or Subscription Features",
            body: "If Friddy offers paid features, we may use account and subscription status data to:",
            list: ["Confirm premium access","Enable premium-only features","Prevent unauthorized access","Manage billing-related access through app store or payment providers"],
            footer: "Friddy does not directly collect full payment card numbers unless we separately state otherwise. Payments are generally handled by app stores or third-party payment processors." },
          { t: "2.5 To Improve and Secure the Service",
            body: "We may use information to:",
            list: ["Debug errors and crashes","Improve app performance","Prevent fraud, abuse, or unauthorized access","Enforce our terms and policies","Monitor system reliability","Test and improve product features"] },
          { t: "2.6 To Communicate With You",
            body: "We may use your contact information to send:",
            list: ["Account-related notices","Security alerts","Service updates","Customer support responses","Important policy updates","Optional product or feature announcements, where permitted"] },
        ],
      },
      {
        n: "3", t: "How We Share Information",
        lead: "We do not sell your personal information. We may share information only in the situations described below.",
        sub: [
          { t: "3.1 With Service Providers",
            body: "We may share information with trusted vendors that help us operate Friddy. The current list of processors is:",
            table: { head: ["Processor", "Purpose"], rows: [
              ["Google Firebase","Authentication, database, cloud functions, storage"],
              ["Anthropic","Recipe AI analysis"],
              ["Google Gemini","Receipt AI analysis"],
              ["Apple","Payment processing (App Store)"],
              ["Kakao","Social login"],
              ["Coupang Partners","Affiliate tracking"],
            ]} },
          { t: "3.2 With AI Providers",
            body: "When you use AI-powered features, relevant data may be sent to third-party AI providers to generate outputs. We send only the data needed for the feature.",
            extra: "For example, the receipt-review feature may send receipt text or image information to Google Gemini to identify purchased items. The recipe analyzer feature may send a recipe URL and your inventory data to Anthropic Claude to generate meal suggestions." },
          { t: "3.3 With Affiliate or Grocery Partners",
            body: "Friddy may include affiliate links or redirect users to grocery partners such as online retailers or delivery platforms. If you click an affiliate link or leave Friddy for a partner website or app:",
            list: [
              "The partner may collect information under its own privacy policy",
              "Friddy may receive limited affiliate attribution information",
              "Friddy may track whether a link was clicked for analytics or commission purposes",
              "Friddy does not control the partner's privacy practices",
            ],
            footer: "Unless clearly stated, Friddy does not automatically complete purchases on your behalf." },
          { t: "3.4 For Legal, Safety, or Compliance Reasons",
            body: "We may disclose information if we believe it is necessary to:",
            list: ["Comply with applicable law or legal process","Respond to lawful requests from authorities","Protect the rights, property, or safety of Everything Essential, users, or others","Investigate fraud, security incidents, or misuse","Enforce our agreements or policies"] },
          { t: "3.5 Business Transfers",
            body: "If Everything Essential is involved in a merger, acquisition, financing, restructuring, or sale of assets, user information may be transferred as part of that transaction. We will take reasonable steps to ensure continued protection of user information." },
        ],
      },
      {
        n: "4", t: "International Data Transfers",
        lead: "Friddy stores and processes information in countries where Everything Essential, its service providers, or infrastructure partners operate. The following international transfers occur:",
        table: { head: ["Recipient","Country","Data Transferred","Method"], rows: [
          ["Google (Firebase)","United States","All user data","Network transmission during service use"],
          ["Anthropic","United States","Recipe analysis data","API call network transmission"],
          ["Google (Gemini)","United States","Receipt analysis data","API call network transmission"],
        ]},
        footer: "These transfers are protected by contractual safeguards and the recipients' applicable security frameworks.",
      },
      {
        n: "5", t: "Data Retention",
        lead: "We retain personal information only for as long as reasonably necessary to provide Friddy, comply with legal obligations, resolve disputes, improve security, and maintain business records.",
        table: { head: ["Data Category","Retention Period"], rows: [
          ["Account information","Until account deletion"],
          ["Inventory and shopping data","Until account deletion"],
          ["Receipt images","30 days after AI analysis"],
          ["Receipt extracted text","Until account deletion"],
          ["Payment records","5 years (Korean E-Commerce Act)"],
          ["Login records","3 months (Korean Communications Privacy Protection Act)"],
          ["Fraud/abuse records","1 year"],
        ]},
        footer: "You may request deletion of your account or certain personal data as described in Section 6.",
      },
      {
        n: "6", t: "Your Rights and Choices",
        lead: "Depending on your location and applicable law, you may have rights to:",
        list: [
          "Access your personal information",
          "Correct inaccurate information",
          "Delete personal information",
          "Withdraw consent where processing is based on consent",
          "Object to certain processing",
          "Request restriction of processing",
          "Request information about how your data is used",
          "Request account deletion",
        ],
        sub: [
          { t: "Account Deletion",
            body: "You can delete your account at any time directly within the Friddy app:",
            ordered: [
              "Open Friddy",
              "Go to <strong>Profile → Settings → Account</strong>",
              "Tap <strong>Delete Account (계정 삭제)</strong>",
              "Confirm deletion",
            ],
            extra: "Upon deletion:",
            list: [
              "All inventory, shopping list, and recipe data is permanently deleted within 30 days",
              "Your account credentials are immediately invalidated",
              "Anonymized usage statistics may be retained",
              "Records required by law (such as purchase history retained for 5 years per the Korean E-Commerce Act) are retained for the legally required period and then deleted",
            ],
            footer: "You may also request account deletion by emailing <a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>. We will respond within 10 business days.<br/><br/>To exercise other rights, contact us at <a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>. We may need to verify your identity before completing certain requests." },
        ],
      },
      {
        n: "7", t: "Permissions",
        lead: "Friddy may request device permissions, including:",
        sub: [
          { t: "Camera or Photo Library", body: "Used for receipt scanning, food-item images, or profile-related uploads." },
          { t: "Notifications", body: "Used for expiration reminders, grocery reminders, reorder alerts, and account notices." },
          { t: "Location", body: "Used for region-based store recommendations, price comparison, or localized grocery features." },
        ],
        footer: "You can manage permissions through your device settings. Some features may not work properly if permissions are disabled.",
      },
      {
        n: "8", t: "Children's Privacy",
        body: "Friddy is not intended for children under the age required by applicable law to consent to data processing (14 years in Korea). We do not knowingly collect personal information from children without appropriate consent.",
        footer: "If you believe a child has provided personal information to Friddy without appropriate consent, please contact us at <a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a> so we can take appropriate action.",
      },
      {
        n: "9", t: "Security",
        lead: "We use reasonable technical and organizational measures to protect personal information, including:",
        list: [
          "Authentication controls",
          "Database access rules",
          "Encryption in transit",
          "Role-based access controls where applicable",
          "Logging and monitoring",
          "Secure cloud infrastructure",
          "Limited internal access to user data",
        ],
        footer: "However, no method of internet transmission or electronic storage is completely secure. We cannot guarantee absolute security.",
      },
      {
        n: "10", t: "AI, Recommendations, and Automated Outputs",
        lead: "Friddy uses automated systems and AI models to generate recommendations. These outputs may include:",
        list: ["Suggested recipes","Grocery optimization results","Budget recommendations","Inventory predictions","Expiration reminders","Receipt matching results","Food waste insights"],
        extra: "These recommendations are for convenience and informational purposes only. Friddy does not guarantee that AI-generated recommendations are always accurate, complete, safe, or suitable for your personal circumstances.",
        extra2: "Users are responsible for reviewing:",
        list2: ["Allergy information","Ingredient suitability","Food safety","Expiration status","Grocery prices","Store availability","Purchase decisions"],
      },
      {
        n: "11", t: "Food Safety and Allergy Notice",
        body: "Friddy may help organize food information, but it is not a medical, nutrition, or food safety authority. You should independently verify whether food is safe to consume.",
        footer: "Friddy's allergy and dietary features are intended to assist users, but they may not detect every risk. Always review ingredient labels, allergen warnings, and official product information before consuming food.",
      },
      {
        n: "12", t: "Third-Party Links and Services",
        body: "Friddy may contain links to third-party websites, grocery platforms, affiliate partners, payment providers, or external services. We are not responsible for the privacy practices, content, or policies of those third parties.",
        footer: "When you leave Friddy, your activity is governed by the third party's own terms and privacy policy.",
      },
      {
        n: "13", t: "Personal Information Protection Officer",
        body: "Under Korea's Personal Information Protection Act (PIPA), Article 31, we designate a Personal Information Protection Officer to oversee personal information handling and respond to user inquiries.",
        contact: {
          heading: "Personal Information Protection Officer",
          rows: [
            { k: "Name", v: "Siyoun Kim" },
            { k: "Position", v: "Co-founder, Everything Essential" },
            { k: "Email", v: "<a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>" },
          ],
        },
      },
      {
        n: "14", t: "Changes to This Privacy Policy",
        body: "We may update this Privacy Policy from time to time. If we make material changes, we will notify users through the app, email, website, or another appropriate method.",
        footer: "The \"Effective Date\" at the top of this document indicates when the policy was last updated.",
      },
      {
        n: "15", t: "Contact Us",
        body: "If you have any questions, requests, or concerns about this Privacy Policy or how Friddy handles personal information, please contact:",
        contact: {
          heading: "Everything Essential",
          rows: [
            { k: "Email", v: "<a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>" },
          ],
        },
        footer: "A Korean-language version of this Privacy Policy is available at: <a href=\"privacy-ko.html\">한국어 버전</a>.",
      },
    ],
    copyright: "Copyright © 2026 Everything Essential. All rights reserved.",
  },

  ko: {
    lang: "ko",
    altLang: "en",
    altHref: "privacy.html",
    altLabel: "English",
    title: "Friddy 개인정보 처리방침",
    eyebrow: "법적 고지",
    meta: [
      { k: "시행일", v: "2026년 5월 5일" },
      { k: "운영자", v: "Everything Essential" },
      { k: "서비스명", v: "Friddy" },
      { k: "문의처", v: "<a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>" },
    ],
    intro: [
      "Friddy는 <strong>Everything Essential</strong>이 운영하는 AI 기반 주방, 식료품, 식단 관리 애플리케이션입니다. Friddy는 사용자의 주방 재고 관리, 유통기한 추적, 레시피 및 장보기 추천, 식료품 비교, 영수증 분석, 식료품 지출 의사결정 개선을 돕습니다.",
      "Friddy를 이용함으로써 본 개인정보 처리방침에 따른 정보 수집 및 이용에 동의하게 됩니다.",
    ],
    sections: [
      {
        n: "1", t: "수집하는 개인정보 항목",
        lead: "저희는 Friddy 서비스 제공, 유지, 개인화, 보안, 개선을 위해 정보를 수집합니다.",
        sub: [
          { t: "1.1 계정 정보",
            body: "Friddy 계정을 생성하거나 이용하실 때 다음 정보를 수집할 수 있습니다.",
            list: ["이름 또는 표시 이름","이메일 주소","전화번호 (제공 시)","로그인 및 인증 정보","프로필 환경설정 (언어, 가구 규모, 예산 범위, 식단 선호도, 알레르기 정보, 식료품 선호도)","구독 또는 프리미엄 상태"] },
          { t: "1.2 주방 및 재고 데이터",
            body: "Friddy의 재고 및 식단 관리 기능을 제공하기 위해 사용자가 앱에 입력하거나 생성한 다음 정보를 수집합니다.",
            list: ["주방 재고 식품 항목","수량, 단위, 카테고리, 보관 위치","유통기한 또는 예상 보관 기간","식품 상태 (신선, 임박, 만료, 소비됨)","재주문 선호도","메모, 태그 또는 사용자 지정 항목 세부 정보"] },
          { t: "1.3 식료품, 장보기, 예산 데이터",
            body: "장보기 계획, 가격 비교, 스마트 바스켓 최적화를 지원하기 위해 다음 정보를 수집합니다.",
            list: ["장보기 목록 항목","식료품 예산 선호도","선호하는 식료품 매장 또는 플랫폼","사용자가 입력하거나 확인한 구매 내역","예상 가격, 선택한 오퍼, 바스켓 추천","사용자가 제출한 매장 평가 또는 피드백"] },
          { t: "1.4 영수증 및 이미지 데이터",
            body: "영수증 스캔 또는 구매 확인 기능을 사용하실 때 다음 정보를 수집할 수 있습니다.",
            list: ["사용자가 업로드한 영수증 사진 또는 이미지","이미지에서 추출된 영수증 텍스트","구매 항목명, 수량, 가격, 매장명, 구매일, 합계","영수증과 장보기 목록 간의 매칭 결과","구매 후 재고 업데이트에 필요한 정보"],
            footer: "영수증에 불필요한 민감 정보가 포함되지 않도록 주의해주시기 바랍니다. 가능하다면 구매 확인에 필요하지 않은 정보는 가리거나 자르고 업로드하시기 바랍니다." },
          { t: "1.5 AI 처리 데이터",
            body: "Friddy는 레시피 분석을 위해 Anthropic의 Claude API를, 영수증 분석을 위해 Google의 Gemini API를 사용합니다. 두 제공업체 모두 API를 통해 제출된 데이터를 모델 훈련에 사용하지 않는다고 계약상 동의했습니다. 이 제공업체들에게 전송되는 데이터는 사용자가 요청한 특정 출력을 생성하기 위해서만 처리되며, 제공업체의 명시된 보존 기간 이후에는 보관되지 않습니다.",
            extra: "AI 기능에 따라 다음과 같은 데이터를 처리할 수 있습니다.",
            list: ["재고 데이터","식단 선호도 및 알레르기 설정","장보기 목록 데이터","영수증 관련 데이터","예산 선호도","AI 기능에 대한 사용자 프롬프트 또는 피드백","AI 생성 추천 및 결과"] },
          { t: "1.6 위치 데이터",
            body: "Friddy는 매장 가용성, 식료품 추천, 지역별 가격, 시장별 기능 개선을 위해 일반적인 위치 정보를 요청할 수 있습니다.",
            list: ["국가, 도시, 또는 대략적 지역","선호하는 쇼핑 지역","선택한 지역 근처 매장 가용성"],
            footer: "Friddy는 핵심 주방 및 식료품 기능을 위해 <strong>지속적인 실시간 위치 추적을 요구하지 않습니다.</strong> 특정 기능이 명시적으로 요청하고 사용자가 권한을 부여한 경우에만 사용됩니다." },
          { t: "1.7 이용, 기기, 기술 데이터",
            body: "다음 기술 및 이용 정보를 자동으로 수집할 수 있습니다.",
            list: ["기기 종류 및 운영체제","앱 버전","IP 주소","충돌 로그 및 진단 데이터","기능 이용 이벤트","성능 데이터","인증 및 보안 로그","대략적인 세션 활동"],
            footer: "이 정보는 앱 안정성 유지, 악용 감지, 사용자 경험 개선, 서비스 보안에 사용됩니다." },
        ],
      },
      {
        n: "2", t: "개인정보 이용 목적",
        lead: "수집된 정보는 다음 목적으로 이용됩니다.",
        sub: [
          { t: "2.1 핵심 앱 기능 제공",
            list: ["계정 생성 및 관리","주방 재고 저장 및 표시","유통기한 추적","레시피 추천 생성","장보기 목록 작성","식료품 구매 추천","영수증 분석","구매 확인 후 재고 업데이트","지출 및 폐기 인사이트 제공"] },
          { t: "2.2 추천 개인화",
            list: ["레시피 추천","만료 임박 식품 알림","장보기 제안","예산 기반 식료품 계획","매장 또는 상품 추천","스마트 바스켓 최적화 결과","재주문 알림"] },
          { t: "2.3 AI 기반 기능 제공",
            list: ["재고 기반 식단 아이디어","식료품 최적화 제안","영수증 검토 결과","예산 절감 추천","음식물 폐기 감소 인사이트","개인화된 장보기 계획"],
            footer: "AI 생성 결과는 부정확하거나 불완전할 수 있습니다. 알레르기, 식단 제한, 가격, 구매 결정과 관련된 추천에 의존하기 전에 반드시 직접 검토하시기 바랍니다." },
          { t: "2.4 프리미엄 또는 구독 기능 처리",
            body: "Friddy가 유료 기능을 제공하는 경우 계정 및 구독 상태 데이터를 다음 목적으로 사용할 수 있습니다.",
            list: ["프리미엄 액세스 확인","프리미엄 전용 기능 활성화","무단 액세스 방지","앱 스토어 또는 결제 제공업체를 통한 결제 관련 액세스 관리"],
            footer: "Friddy는 별도로 명시되지 않는 한 신용카드 번호 전체를 직접 수집하지 않습니다. 결제는 일반적으로 앱 스토어 또는 제3자 결제 처리업체가 처리합니다." },
          { t: "2.5 서비스 개선 및 보안",
            list: ["오류 및 충돌 디버깅","앱 성능 개선","사기, 악용, 무단 액세스 방지","약관 및 정책 시행","시스템 안정성 모니터링","제품 기능 테스트 및 개선"] },
          { t: "2.6 사용자와의 소통",
            body: "연락처 정보는 다음 목적으로 사용될 수 있습니다.",
            list: ["계정 관련 알림","보안 경고","서비스 업데이트","고객 지원 응답","중요한 정책 업데이트","허용되는 경우 선택적 제품 또는 기능 공지"] },
        ],
      },
      {
        n: "3", t: "개인정보 처리 위탁",
        lead: "저희는 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.",
        table: { head: ["위탁받는 자","위탁업무 내용"], rows: [
          ["Google Firebase","인증, 데이터베이스, 클라우드 함수, 스토리지"],
          ["Anthropic","레시피 AI 분석"],
          ["Google Gemini","영수증 AI 분석"],
          ["Apple","결제 처리 (App Store)"],
          ["카카오","소셜 로그인"],
          ["쿠팡 파트너스","어필리에이트 추적"],
        ]},
        afterTable: "저희는 개인정보를 판매하지 않습니다. 위탁 외에 다음의 경우에만 정보를 공유합니다.",
        sub: [
          { t: "3.1 어필리에이트 또는 식료품 파트너",
            body: "Friddy는 어필리에이트 링크를 포함하거나 사용자를 온라인 소매업체 또는 배송 플랫폼과 같은 식료품 파트너로 리디렉션할 수 있습니다. 어필리에이트 링크를 클릭하거나 파트너 웹사이트 또는 앱으로 이동하시는 경우:",
            list: ["파트너는 자체 개인정보 처리방침에 따라 정보를 수집할 수 있습니다","Friddy는 제한된 어필리에이트 귀속 정보를 수신할 수 있습니다","Friddy는 분석 또는 수수료 목적으로 링크 클릭 여부를 추적할 수 있습니다","Friddy는 파트너의 개인정보 보호 관행을 통제하지 않습니다"],
            footer: "명시되지 않는 한 Friddy는 사용자를 대신하여 자동으로 구매를 완료하지 않습니다." },
          { t: "3.2 법적, 안전, 또는 컴플라이언스 사유",
            body: "다음의 경우 정보를 공개할 수 있습니다.",
            list: ["적용 가능한 법률 또는 법적 절차 준수","당국의 적법한 요청에 응답","Everything Essential, 사용자 또는 타인의 권리, 재산, 안전 보호","사기, 보안 사고, 또는 악용 조사","약관 또는 정책 시행"] },
          { t: "3.3 사업 양도",
            body: "Everything Essential이 합병, 인수, 자금 조달, 구조조정, 또는 자산 매각에 관여하는 경우 사용자 정보가 해당 거래의 일부로 이전될 수 있습니다. 사용자 정보의 지속적인 보호를 위해 합리적인 조치를 취할 것입니다." },
        ],
      },
      {
        n: "4", t: "개인정보의 국외 이전",
        lead: "저희는 다음과 같이 개인정보를 국외로 이전하고 있습니다.",
        table: { head: ["이전받는 자","이전 국가","이전 항목","이전 일시 및 방법"], rows: [
          ["Google (Firebase)","미국","모든 사용자 데이터","서비스 이용 시 네트워크 전송"],
          ["Anthropic","미국","레시피 분석 데이터","API 호출 시 네트워크 전송"],
          ["Google (Gemini)","미국","영수증 분석 데이터","API 호출 시 네트워크 전송"],
        ]},
        footer: "이러한 이전은 계약상 안전장치 및 수신자의 적용 가능한 보안 프레임워크에 의해 보호됩니다.",
      },
      {
        n: "5", t: "개인정보 보유 및 이용기간",
        lead: "저희는 Friddy 제공, 법적 의무 준수, 분쟁 해결, 보안 개선, 사업 기록 유지를 위해 합리적으로 필요한 기간 동안만 개인정보를 보유합니다.",
        table: { head: ["항목","보유기간"], rows: [
          ["회원 정보","회원 탈퇴 시까지"],
          ["재고 및 장보기 데이터","회원 탈퇴 시까지"],
          ["영수증 이미지","AI 분석 후 30일"],
          ["영수증 추출 텍스트","회원 탈퇴 시까지"],
          ["결제 기록","5년 (전자상거래법)"],
          ["로그인 기록","3개월 (통신비밀보호법)"],
          ["부정 이용 기록","1년"],
        ]},
        footer: "제6조에 따라 계정 또는 특정 개인정보의 삭제를 요청하실 수 있습니다.",
      },
      {
        n: "6", t: "정보주체의 권리 및 행사 방법",
        lead: "거주 지역 및 적용 가능한 법률에 따라 다음 권리를 가질 수 있습니다.",
        list: ["개인정보 열람 요청","잘못된 정보 정정","개인정보 삭제","동의에 기반한 처리에 대한 동의 철회","특정 처리에 대한 이의 제기","처리 제한 요청","데이터 사용 방법에 대한 정보 요청","계정 삭제 요청"],
        sub: [
          { t: "계정 삭제",
            body: "언제든지 Friddy 앱 내에서 직접 계정을 삭제하실 수 있습니다.",
            ordered: ["Friddy 앱 실행","<strong>프로필 → 설정 → 계정</strong>으로 이동","<strong>계정 삭제</strong> 버튼 탭","삭제 확인"],
            extra: "삭제 시:",
            list: ["모든 재고, 장보기 목록, 레시피 데이터는 30일 이내에 영구적으로 삭제됩니다","계정 자격 증명은 즉시 무효화됩니다","익명화된 이용 통계는 보유될 수 있습니다","법률에 의해 요구되는 기록 (전자상거래법에 따른 5년 보유 구매 내역 등)은 법적으로 요구되는 기간 동안 보유된 후 삭제됩니다"],
            footer: "<a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>으로 이메일을 보내 계정 삭제를 요청하실 수도 있습니다. 영업일 기준 10일 이내에 응답해드립니다.<br/><br/>기타 권리 행사를 위해서는 <a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>으로 문의해주시기 바랍니다. 특정 요청을 완료하기 전에 신원 확인이 필요할 수 있습니다." },
        ],
      },
      {
        n: "7", t: "권한",
        lead: "Friddy는 다음과 같은 기기 권한을 요청할 수 있습니다.",
        sub: [
          { t: "카메라 또는 사진 라이브러리", body: "영수증 스캔, 식품 항목 이미지, 또는 프로필 관련 업로드에 사용됩니다." },
          { t: "알림", body: "유통기한 알림, 장보기 알림, 재주문 경고, 계정 알림에 사용됩니다." },
          { t: "위치", body: "지역 기반 매장 추천, 가격 비교, 또는 지역별 식료품 기능에 사용됩니다." },
        ],
        footer: "기기 설정을 통해 권한을 관리하실 수 있습니다. 권한이 비활성화된 경우 일부 기능이 제대로 작동하지 않을 수 있습니다.",
      },
      {
        n: "8", t: "아동의 개인정보",
        body: "Friddy는 적용 가능한 법률에 따라 데이터 처리에 동의할 수 있는 연령 미만의 아동(한국에서는 만 14세)을 대상으로 하지 않습니다. 적절한 동의 없이 아동의 개인정보를 고의로 수집하지 않습니다.",
        footer: "아동이 적절한 동의 없이 Friddy에 개인정보를 제공했다고 판단되시면 <a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>으로 연락해주시기 바랍니다.",
      },
      {
        n: "9", t: "보안",
        lead: "저희는 개인정보 보호를 위해 합리적인 기술적, 관리적 조치를 사용합니다.",
        list: ["인증 통제","데이터베이스 액세스 규칙","전송 시 암호화","적용 가능한 경우 역할 기반 액세스 통제","로깅 및 모니터링","보안 클라우드 인프라","사용자 데이터에 대한 제한된 내부 액세스"],
        footer: "다만, 인터넷 전송 또는 전자 저장 방법은 완전히 안전하지 않습니다. 절대적인 보안을 보장할 수는 없습니다.",
      },
      {
        n: "10", t: "AI, 추천, 자동화된 결과",
        lead: "Friddy는 자동화된 시스템 및 AI 모델을 사용하여 추천을 생성합니다.",
        list: ["레시피 제안","식료품 최적화 결과","예산 추천","재고 예측","만료 알림","영수증 매칭 결과","음식물 폐기 인사이트"],
        extra: "이러한 추천은 편의 및 정보 제공 목적으로만 제공됩니다. Friddy는 AI 생성 추천이 항상 정확하거나 완전하거나 안전하거나 개인 상황에 적합하다고 보장하지 않습니다.",
        extra2: "사용자는 다음 사항을 직접 검토할 책임이 있습니다.",
        list2: ["알레르기 정보","재료 적합성","식품 안전","유통기한 상태","식료품 가격","매장 가용성","구매 결정"],
      },
      {
        n: "11", t: "식품 안전 및 알레르기 안내",
        body: "Friddy는 식품 정보를 정리하는 데 도움이 될 수 있지만 의료, 영양, 또는 식품 안전 권위가 아닙니다. 식품의 섭취 안전성은 직접 확인하셔야 합니다.",
        footer: "Friddy의 알레르기 및 식단 기능은 사용자를 보조하기 위한 것이며 모든 위험을 감지하지 못할 수 있습니다. 식품 섭취 전에 항상 성분 라벨, 알레르기 경고, 공식 제품 정보를 검토하시기 바랍니다.",
      },
      {
        n: "12", t: "제3자 링크 및 서비스",
        body: "Friddy는 제3자 웹사이트, 식료품 플랫폼, 어필리에이트 파트너, 결제 제공업체, 또는 외부 서비스에 대한 링크를 포함할 수 있습니다. 저희는 해당 제3자의 개인정보 보호 관행, 콘텐츠, 또는 정책에 대해 책임지지 않습니다.",
        footer: "Friddy를 떠나시면 활동은 제3자의 자체 약관 및 개인정보 처리방침의 적용을 받습니다.",
      },
      {
        n: "13", t: "개인정보보호책임자",
        body: "저희는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 「개인정보보호법」 제31조에 따라 아래와 같이 개인정보보호책임자를 지정하고 있습니다.",
        contact: {
          heading: "개인정보보호책임자",
          rows: [
            { k: "성명", v: "김시윤" },
            { k: "직책", v: "Everything Essential 공동 창립자" },
            { k: "이메일", v: "<a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>" },
          ],
        },
      },
      {
        n: "14", t: "개인정보 처리방침의 변경",
        body: "본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 중대한 변경 사항이 있는 경우 앱, 이메일, 웹사이트 또는 기타 적절한 방법을 통해 사용자에게 알려드립니다.",
        footer: "본 문서 상단의 \"시행일\"은 정책이 마지막으로 업데이트된 날짜를 나타냅니다.",
      },
      {
        n: "15", t: "문의처",
        body: "본 개인정보 처리방침이나 Friddy의 개인정보 처리 방식에 대해 질문, 요청, 또는 우려 사항이 있으시면 다음으로 연락해주시기 바랍니다.",
        contact: {
          heading: "Everything Essential",
          rows: [
            { k: "이메일", v: "<a href=\"mailto:ee.friddy@gmail.com\">ee.friddy@gmail.com</a>" },
          ],
        },
        footer: "본 개인정보 처리방침의 영문 버전은 다음에서 확인하실 수 있습니다: <a href=\"privacy.html\">English version</a>.",
      },
    ],
    copyright: "Copyright © 2026 Everything Essential. All rights reserved.",
  },
};

// ——— Render helpers ———
const HTMLBlock = ({ html, as = "p", className = "", style = {} }) => {
  const Tag = as;
  return <Tag className={className} style={style} dangerouslySetInnerHTML={{__html: html}} />;
};

const PrivacyTable = ({ data }) => (
  <div className="pp-table-wrap">
    <table className="pp-table">
      <thead>
        <tr>{data.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {data.rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td key={j} dangerouslySetInnerHTML={{__html: cell}} />)}</tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SubBlock = ({ s }) => (
  <div className="pp-sub">
    <h4 className="pp-sub-title">{s.t}</h4>
    {s.body && <HTMLBlock as="p" html={s.body} className="pp-body" />}
    {s.ordered && (
      <ol className="pp-list">
        {s.ordered.map((li, i) => <HTMLBlock key={i} as="li" html={li} />)}
      </ol>
    )}
    {s.table && <PrivacyTable data={s.table} />}
    {s.extra && <HTMLBlock as="p" html={s.extra} className="pp-body" style={{marginTop: 16}} />}
    {s.list && (
      <ul className="pp-list">
        {s.list.map((li, i) => <HTMLBlock key={i} as="li" html={li} />)}
      </ul>
    )}
    {s.footer && <HTMLBlock as="p" html={s.footer} className="pp-note" />}
  </div>
);

const Section = ({ s }) => (
  <section className="pp-section" id={`s${s.n}`}>
    <div className="pp-section-head">
      <span className="pp-section-num">{s.n}</span>
      <h2 className="pp-section-title">{s.t}</h2>
    </div>
    {s.lead && <HTMLBlock as="p" html={s.lead} className="pp-lead" />}
    {s.body && <HTMLBlock as="p" html={s.body} className="pp-body" />}
    {s.list && (
      <ul className="pp-list">
        {s.list.map((li, i) => <HTMLBlock key={i} as="li" html={li} />)}
      </ul>
    )}
    {s.table && <PrivacyTable data={s.table} />}
    {s.afterTable && <HTMLBlock as="p" html={s.afterTable} className="pp-body" />}
    {s.extra && <HTMLBlock as="p" html={s.extra} className="pp-body" style={{marginTop: 16}} />}
    {s.extra2 && <HTMLBlock as="p" html={s.extra2} className="pp-body" style={{marginTop: 16}} />}
    {s.list2 && (
      <ul className="pp-list">
        {s.list2.map((li, i) => <HTMLBlock key={i} as="li" html={li} />)}
      </ul>
    )}
    {s.sub && s.sub.map((sub, i) => <SubBlock key={i} s={sub} />)}
    {s.contact && (
      <div className="pp-contact">
        <div className="pp-contact-heading">{s.contact.heading}</div>
        <div className="pp-contact-rows">
          {s.contact.rows.map((r, i) => (
            <div key={i} className="pp-contact-row">
              <span className="pp-contact-k">{r.k}</span>
              <HTMLBlock as="span" html={r.v} className="pp-contact-v" />
            </div>
          ))}
        </div>
      </div>
    )}
    {s.footer && <HTMLBlock as="p" html={s.footer} className="pp-note" />}
  </section>
);

const PrivacyHero = ({ d }) => (
  <section style={{paddingTop: 72, paddingBottom: 48}} lang={d.lang}>
    <div className="container">
      <div style={{maxWidth: 920}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap: 24, flexWrap:"wrap"}}>
          <div>
            <span className="eyebrow">{d.eyebrow}</span>
            <h1 className="rise" style={{marginTop: 24, fontSize: "clamp(40px, 5vw, 64px)"}}>{d.title}</h1>
          </div>
          <a href={d.altHref} className="pp-lang-toggle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
            <span>{d.altLabel}</span>
          </a>
        </div>
        <div className="pp-meta">
          {d.meta.map((m, i) => (
            <div key={i} className="pp-meta-row">
              <span className="pp-meta-k">{m.k}</span>
              <HTMLBlock as="span" html={m.v} className="pp-meta-v" />
            </div>
          ))}
        </div>
        <div className="pp-intro">
          {d.intro.map((p, i) => <HTMLBlock key={i} as="p" html={p} />)}
        </div>
      </div>
    </div>
  </section>
);

const PrivacyApp = ({ lang }) => {
  const d = PrivacyData[lang] || PrivacyData.en;
  React.useEffect(() => {
    document.documentElement.lang = d.lang;
  }, [d.lang]);
  return (
    <>
      <Nav active="privacy" />
      <PrivacyHero d={d} />
      <div className="container" lang={d.lang}>
        <div className="pp-doc">
          {d.sections.map((s, i) => <Section key={i} s={s} />)}
          <div className="pp-copyright">{d.copyright}</div>
        </div>
      </div>
      <div style={{height: 96}} />
      <Footer />
      <TweaksHost />
    </>
  );
};

const LANG = (typeof window !== "undefined" && window.__PRIVACY_LANG) || "en";
ReactDOM.createRoot(document.getElementById("root")).render(<PrivacyApp lang={LANG} />);
setTimeout(setupFadeIn, 100);
