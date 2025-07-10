### Swibee - 모바일 이커머스 UI/UX 와이어프레임

<div>







</div><div>`<h3>`🐝 달콤한 쇼핑의 새로운 경험`</h3>`
`<p>`모바일 전용 이커머스 플랫폼 Swibee의 완전한 UI/UX 와이어프레임`</p>`

</div>---

## 프로젝트 소개

**Swibee**는 꿀벌을 모티브로 한 모바일 전용 이커머스 플랫폼입니다. 천연 제품, 유기농 식품, 수제 간식 등을 판매하는 친환경적이고 트렌디한 쇼핑 경험을 제공합니다.

### 주요 특징

- 🎨 **모바일 퍼스트 디자인**: 384px 고정 폭의 모바일 전용 UI
- 🍯 **브랜드 아이덴티티**: 노란색 테마의 꿀벌 컨셉
- 📱 **네이티브 앱 경험**: PWA 지원 가능한 모바일 최적화
- 🛍️ **완전한 이커머스 플로우**: 상품 탐색부터 결제까지
- ⚡ **빠른 성능**: Next.js 15 + App Router 활용


---

## ️ 기술 스택

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui
- **Icons**: Lucide React


### Development Tools

- **Package Manager**: npm/yarn/pnpm
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git


---

## 주요 기능

### 홈페이지

- 히어로 섹션 with 프로모션
- 카테고리별 빠른 접근
- 베스트 상품 추천
- 브랜드 스토리


### 검색 시스템

- 실시간 검색 자동완성
- 인기 검색어 & 최근 검색어
- 고급 필터링 (가격, 카테고리, 브랜드, 평점)
- 검색 결과 그리드/리스트 뷰


### 쇼핑 기능

- 상품 상세 정보 (이미지, 설명, 리뷰, Q&A)
- 장바구니 관리 (수량 조절, 삭제)
- 찜하기 기능
- 주문 관리


### 카테고리

- 8개 주요 카테고리
- 서브카테고리 확장/축소
- 인기 카테고리 트렌드
- 카테고리별 상품 수 표시


### 마이페이지

- 사용자 프로필 & 등급 시스템
- 주문/배송 조회
- 리뷰 관리
- 쿠폰 & 적립금 관리
- 계정 설정


---

## 설치 및 실행

### 1. 저장소 클론

```shellscript
git clone https://github.com/your-username/swibee-wireframes.git
cd swibee-wireframes
```

### 2. 의존성 설치

```shellscript
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 3. 개발 서버 실행

```shellscript
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

### 4. 브라우저에서 확인

```plaintext
http://localhost:3000
```

> 💡 **모바일 뷰 확인**: 브라우저 개발자 도구에서 모바일 뷰(384px)로 설정하여 확인하세요.



---

## 프로젝트 구조

```plaintext
swibee-wireframes/
├── app/                          # Next.js App Router
│   ├── auth/                     # 인증 관련 페이지
│   │   ├── login/
│   │   └── signup/
│   ├── cart/                     # 장바구니
│   ├── categories/               # 카테고리
│   ├── mypage/                   # 마이페이지
│   │   ├── orders/
│   │   └── reviews/
│   ├── product/[id]/             # 상품 상세 (동적 라우팅)
│   ├── search/                   # 검색
│   ├── wishlist/                 # 찜한 상품
│   ├── layout.tsx                # 루트 레이아웃
│   ├── page.tsx                  # 홈페이지
│   └── globals.css               # 글로벌 스타일
├── components/                   # 재사용 가능한 컴포넌트
│   ├── home/                     # 홈페이지 컴포넌트
│   ├── layout/                   # 레이아웃 컴포넌트
│   ├── products/                 # 상품 관련 컴포넌트
│   ├── search/                   # 검색 관련 컴포넌트
│   └── ui/                       # shadcn/ui 컴포넌트
├── lib/                          # 유틸리티 함수
├── hooks/                        # 커스텀 훅
└── public/                       # 정적 파일
```

---

## 페이지별 상세 설명

### 홈페이지 (`/`)

- **히어로 섹션**: 브랜드 메시지와 CTA 버튼
- **카테고리 그리드**: 8개 주요 카테고리 아이콘
- **베스트 상품**: 2x2 그리드로 인기 상품 표시
- **프로모션 배너**: 할인 정보 및 이벤트


### 검색 페이지 (`/search`)

- **검색 헤더**: 자동완성, 음성 검색, 필터 버튼
- **검색 제안**: 최근 검색어, 인기 검색어, 카테고리별 검색
- **검색 결과**: 그리드/리스트 뷰 전환, 정렬 옵션
- **고급 필터**: 가격대, 카테고리, 브랜드, 평점


### 장바구니 (`/cart`)

- **상품 목록**: 이미지, 이름, 가격, 수량 조절
- **주문 요약**: 상품 금액, 배송비, 총 결제 금액
- **무료배송 안내**: 추가 구매 금액 표시
- **주문하기 버튼**: 고정 하단 버튼


### 카테고리 (`/categories`)

- **인기 카테고리**: 트렌드 표시와 상품 수
- **전체 카테고리**: 아코디언 형태의 서브카테고리
- **특가 섹션**: 카테고리별 할인 정보
- **빠른 접근**: 카테고리 아이콘과 색상 구분


### ️ 상품 상세 (`/product/[id]`)

- **상품 이미지**: 슬라이더 형태의 이미지 갤러리
- **상품 정보**: 이름, 가격, 평점, 리뷰 수
- **수량 선택**: +/- 버튼으로 수량 조절
- **탭 메뉴**: 상품설명, 리뷰, Q&A
- **액션 버튼**: 장바구니 담기, 바로 구매


### 마이페이지 (`/mypage`)

- **사용자 프로필**: 이름, 등급, 적립금, 쿠폰
- **주문 관리**: 주문/배송 조회, 리뷰 관리
- **혜택 관리**: 쿠폰함, 적립금 내역
- **계정 설정**: 개인정보, 배송지, 알림 설정


---

## 디자인 시스템

### 컬러 팔레트

```css
/* Primary Colors */
--yellow-400: #FBBF24  /* 메인 브랜드 컬러 */
--yellow-500: #F59E0B  /* 호버 상태 */
--orange-400: #FB923C  /* 보조 컬러 */

/* Semantic Colors */
--success: #10B981    /* 성공, 완료 */
--warning: #F59E0B    /* 경고, 주의 */
--error: #EF4444      /* 오류, 삭제 */
--info: #3B82F6       /* 정보, 링크 */
```

### 스페이싱 시스템

- **Container**: 최대 384px (모바일 전용)
- **Padding**: 16px (기본), 12px (컴팩트)
- **Gap**: 12px (카드 간격), 8px (요소 간격)
- **Border Radius**: 12px (카드), 24px (버튼)


### 타이포그래피

- **제목**: 20px-24px, font-bold
- **부제목**: 16px-18px, font-semibold
- **본문**: 14px-16px, font-medium
- **캡션**: 12px-14px, font-normal


### 터치 타겟

- **최소 크기**: 44px × 44px
- **버튼 높이**: 48px (기본), 40px (컴팩트)
- **아이콘 크기**: 20px-24px


---

## 상태 관리

### 로컬 상태

- `useState`: 컴포넌트 내부 상태
- `useRouter`: 페이지 네비게이션
- `useParams`: 동적 라우팅 파라미터


### ️ 전역 상태 (향후 구현)

- 장바구니 아이템 관리
- 사용자 인증 상태
- 찜한 상품 목록
- 검색 히스토리


---

## 반응형 디자인

### 타겟 디바이스

- **Primary**: iPhone 14 Pro (393px)
- **Secondary**: Galaxy S23 (360px)
- **Container**: 384px 고정 (최적화)


### 브레이크포인트

```css
/* 모바일 전용 - 고정 폭 */
.container {
  max-width: 384px;
  margin: 0 auto;
}
```

---

## 성능 최적화

### Next.js 최적화

- **App Router**: 최신 라우팅 시스템
- **Server Components**: 기본 서버 사이드 렌더링
- **Image Optimization**: Next.js Image 컴포넌트
- **Code Splitting**: 페이지별 자동 분할


### CSS 최적화

- **Tailwind CSS**: 사용하지 않는 스타일 제거
- **CSS-in-JS**: 컴포넌트 기반 스타일링
- **Critical CSS**: 초기 로딩 최적화


---

## 향후 개발 계획

### Phase 1: 기본 기능 완성 

- 모바일 UI/UX 와이어프레임
- 페이지 간 라우팅
- 기본 상태 관리
- 반응형 디자인


### Phase 2: 백엔드 연동 

- REST API 연동
- 실제 상품 데이터
- 사용자 인증 시스템
- 주문 처리 로직


### Phase 3: 고급 기능 

- 결제 시스템 연동
- 푸시 알림
- PWA 기능
- 오프라인 지원


### Phase 4: 최적화 & 배포 

- 성능 최적화
- SEO 최적화
- 모니터링 시스템
- 프로덕션 배포


---

## 기여하기

1. **Fork** 이 저장소
2. **Feature 브랜치** 생성 (`git checkout -b feature/AmazingFeature`)
3. **변경사항 커밋** (`git commit -m 'Add some AmazingFeature'`)
4. **브랜치에 Push** (`git push origin feature/AmazingFeature`)
5. **Pull Request** 생성


---

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 연락처

- **프로젝트 링크**: [https://github.com/your-username/swibee-wireframes](https://github.com/your-username/swibee-wireframes)
- **데모 사이트**: [https://swibee-wireframes.vercel.app](https://swibee-wireframes.vercel.app)


---

<div>`<p>`🍯 Made with ❤️ by Swibee Team`</p>`
`<p>`달콤한 쇼핑의 새로운 경험을 만들어갑니다`</p>`

</div>
