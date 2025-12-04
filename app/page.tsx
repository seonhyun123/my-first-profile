import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. 상단 네비게이션 (핵심 역량 링크 추가됨) */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-slate-900">"자신의 포트폴리오" 만들기 프로젝트</h1>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <Link href="#about" className="hover:text-blue-700 transition-colors">소개</Link>
            <Link href="#experience" className="hover:text-blue-700 transition-colors">경력</Link>
            {/* 🎯 새로 추가된 '역량' 링크 */}
            <Link href="#skills" className="hover:text-blue-700 transition-colors">역량</Link>
            <Link href="#projects" className="hover:text-blue-700 transition-colors">프로젝트</Link>
            <Link href="#contact" className="hover:text-blue-700 transition-colors">연락처</Link>
          </div>
        </div>
      </nav>

      {/* 2. 히어로 섹션 */}
      <header className="pt-48 pb-32 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold mb-6 tracking-wide shadow-sm">
            부동산 디벨로퍼를 꿈꾸는 대학생
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-slate-900">
            공간의 가치를 만드는<br />
            <span className="text-blue-700"> "부동산 디벨로퍼"로 성장하고자 하는 김성현</span>입니다.
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
            단국대학교 도시계획부동산학부 3학년에 재학중이며,<br />
            이론을 넘어 현장을 보는 눈을 키우며, <br className="hidden md:block"/>
            사람이 머물고 싶은 도시 공간을 그려나갑니다.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-500/20 transform hover:-translate-y-1">
              연락하기
            </Link> 전화: 010-5716-9308 / 이메일: jsppp1185@dankook.ac.kr
          </div>
        </div>
      </header>

      {/* 3. 소개 (나의 이야기) */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
          {/* 사진 및 요약 정보 */}
          <div className="w-full md:w-1/3">
             <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-slate-100 mb-6 border border-slate-100">
                {/* public 폴더에 p7.png가 있어야 사진이 뜹니다 (프로필) */}
                <Image 
                  src="/uploads/p7.png" 
                  alt="김성현 증명사진" 
                  fill 
                  className="object-cover" 
                />
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <div>
                    <h4 className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Education</h4>
                    <p className="font-bold text-slate-900">단국대학교</p>
                    <p className="text-sm text-slate-600">도시계획부동산학부 (부동산학)</p>
                    <p className="text-xs text-slate-500 mt-1">2021 ~ 현재 (3학년 재학)</p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                    <h4 className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">License</h4>
                    <p className="font-bold text-slate-900">투자자산운용사</p>
                    <p className="text-xs text-slate-500">2025 취득</p>
                </div>
             </div>
          </div>
          
          {/* 긴 글 소개 */}
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">"모든 것은 경험이다"</h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify break-keep">
              <p>
                안녕하십니까, 단국대학교 도시계획부동산학부 3학년 김성현입니다.
                저는 주전공으로 부동산학을, 복수전공으로 도시계획학을 공부하며 다수의 팀 프로젝트를 통해 이론과 실무를 익혀왔습니다.
              </p>
              <p>
                저의 좌우명은 <strong>‘모든 것은 경험이다’</strong>입니다. 
                이 신념 아래, 강의실 밖으로 나가 직접 부딪히며 성장해왔습니다.
                <strong>‘조치원 도시재생’</strong> 활동을 통해 현장의 문제를 발굴하고 해결책을 제시하며 공공정책에 대한 이해를 높였고, 
                학부 동아리 <strong>‘유리드’</strong> 운영진으로서 조직 관리와 기획 능력을 길렀습니다.
              </p>
              <p>
                또한 <strong>금천구청</strong>에서의 행정 실무 경험을 통해 공공 서비스 마인드를 익혔으며, 
                최근에는 <strong>투자자산운용사</strong> 자격증을 취득하여 전문적인 금융 분석 역량을 갖추었습니다.
                현대건설과 삼성물산 모델하우스 현장 보조 업무는 건설사와 고객 간의 접점을 이해하는 소중한 기회였습니다.
              </p>
              <p className="font-medium text-slate-900 pt-4">
                이러한 경험들은 저를 "팀 프로젝트에 최적인 사람"으로 만들었습니다. 
                앞으로도 경험과 전공지식을 함양하며 구체적인 "성과"로 증명하는 부동산 디벨로퍼가 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 경력 및 활동 (타임라인 - 정방향: 과거 → 현재) */}
      <section id="experience" className="py-32 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">경력 및 활동 타임라인</h3>
          
          <div className="space-y-12">
            
            {/* 경력 1: 조치원 도시재생 (2022.01) - 시작 */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2022.01</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10 relative"></div>
                    <div className="w-0.5 h-full bg-slate-200 absolute top-3 left-1.5 -ml-px group-last:hidden"></div>
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">조치원 도시재생 대외활동</h4>
                    <p className="text-slate-500 text-sm mb-3">원도심과 구도심 간의 균형발전 아이디어 도출</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        현장 활동을 통해 원도심의 실제 도시 문제를 탐구하고, 균형 발전을 위한 맞춤형 아이디어를 모색했습니다.
                    </p>
                </div>
            </div>

            {/* 경력 2: 학회 기획부 (2022.03 ~ 2022.12) */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2022.03</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full z-10 relative group-hover:bg-blue-600 transition"></div>
                    <div className="w-0.5 h-full bg-slate-200 absolute top-3 left-1.5 -ml-px group-last:hidden"></div>
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">학회 기획부 운영진 활동 (유리드)</h4>
                    <p className="text-slate-500 text-sm mb-3">단국대 도시계획부동산학부 소속 (2022.03 ~ 2022.12)</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        팀별 임장 활동 기획, 국내 3개 대학교 연합 학술회 기획 및 진행을 통해 조직 운영 및 리더십 역량을 배양했습니다.
                    </p>
                </div>
            </div>

            {/* 경력 3: 금천구청 동사무소 (2022.07) */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2022.07</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full z-10 relative group-hover:bg-blue-600 transition"></div>
                    <div className="w-0.5 h-full bg-slate-200 absolute top-3 left-1.5 -ml-px group-last:hidden"></div>
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">금천구청 청년 아르바이트 (1차)</h4>
                    <p className="text-slate-500 text-sm mb-3">시흥5동 동사무소 근무</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        구민 대상 행사 지원 및 동사무소 행정 업무 보조(복사, 파쇄 등)를 수행하며 공공 행정 현장을 경험했습니다.
                    </p>
                </div>
            </div>

            {/* 경력 4: 공군 만기 전역 (2023.02 ~ 2024.11) */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2023.02</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full z-10 relative group-hover:bg-blue-600 transition"></div>
                    <div className="w-0.5 h-full bg-slate-200 absolute top-3 left-1.5 -ml-px group-last:hidden"></div>
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">대한민국 공군 병장 만기 전역</h4>
                    <p className="text-slate-500 text-sm mb-3">복무 기간: 2023.02 ~ 2024.11.12.</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        조직 생활을 통해 규율과 책임감을 습득하고, 공동의 목표 달성을 위한 팀워크를 발휘했습니다.
                    </p>
                </div>
            </div>
            
            {/* 경력 5: 금천구청 지역아동과 (2025.01) */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2025.01</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full z-10 relative group-hover:bg-blue-600 transition"></div>
                    <div className="w-0.5 h-full bg-slate-200 absolute top-3 left-1.5 -ml-px group-last:hidden"></div>
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">금천구청 대학생 청년 아르바이트 (2차)</h4>
                    <p className="text-slate-500 text-sm mb-3">금천구 지역아동과 소속 지역아동센터 근무 (2025.01.01. ~ 01.31.)</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        지역 아동 대상 교육 보조 및 행사 보조 지원 업무를 수행하며 공공 서비스에 대한 이해와 책임감을 높였습니다.
                    </p>
                </div>
            </div>

            {/* 경력 6: 현대건설 힐스테이트 (2025.01) */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2025.01</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full z-10 relative group-hover:bg-blue-600 transition"></div>
                    <div className="w-0.5 h-full bg-slate-200 absolute top-3 left-1.5 -ml-px group-last:hidden"></div>
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">현대건설 힐스테이트 분양대행사 현장 보조</h4>
                    <p className="text-slate-500 text-sm mb-3">내부 모델하우스 현장 보조 업무</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        주택 분양 관련 행정 업무를 체험하며 체계적인 업무 처리 능력과 현장 실무 경험을 쌓았습니다.
                    </p>
                </div>
            </div>
            
            {/* 경력 7: 삼성물산 래미안 (2025.01) */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2025.01</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full z-10 relative group-hover:bg-blue-600 transition"></div>
                    <div className="w-0.5 h-full bg-slate-200 absolute top-3 left-1.5 -ml-px group-last:hidden"></div>
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">삼성물산 래미안 분양대행사 현장 보조</h4>
                    <p className="text-slate-500 text-sm mb-3">내·외부 모델하우스 현장 보조 업무</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        분양 현장의 행정 지원과 고객 대응에 참여하며, 건설사와 분양대행사 간의 협업 구조 및 마케팅 전략 이해도를 높였습니다.
                    </p>
                </div>
            </div>

            {/* 경력 8: 투자자산운용사 취득 (2025.07) - 끝 */}
            <div className="flex gap-4 md:gap-6 group">
                <div className="flex-none w-20 md:w-24 pt-1 text-right">
                    <span className="text-sm font-bold text-blue-600">2025.07</span>
                </div>
                <div className="flex-none relative pt-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10 relative"></div>
                    {/* 마지막 항목이므로 선을 그리지 않습니다. */}
                </div>
                <div className="pb-8">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">투자자산운용사 자격증 취득</h4>
                    <p className="text-slate-500 text-sm mb-3">전문성 강화</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        금융 시장 분석, 자산 배분, 포트폴리오 관리 등 전략적인 투자 역량을 갖추었습니다.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 🎯 4. 핵심 역량 (Skills Section) - 새로 삽입 */}
      <section id="skills" className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">핵심 역량</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Skill Card 1: 분석 및 기획 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-blue-700">분석 및 기획력</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                    <li>부동산 시장 동향 및 입지 분석</li>
                    <li>SWOT 기반의 사업 타당성 검토</li>
                    <li>엑셀 활용 재무 모델링 기초</li>
                </ul>
            </div>

            {/* Skill Card 2: 금융 및 법규 이해 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-blue-700">금융 및 법규 이해</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                    <li>투자자산운용사 자격 기반의 포트폴리오 관리</li>
                    <li>부동산 신탁 구조 및 권리 분석 능력</li>
                    <li>PF(Project Financing) 리스크 요인 이해</li>
                </ul>
            </div>

            {/* Skill Card 3: 협업 및 현장 실무 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-blue-700">협업 및 현장 실무</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                    <li>학회 운영진 및 연합 학술제 기획 경험</li>
                    <li>금천구청 및 모델하우스 근무 경험</li>
                    <li>조치원 도시재생 현장 문제 해결 경험</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 프로젝트 섹션 (1번~6번 순서대로 정렬 + 사진 적용) */}
      <section id="projects" className="py-32 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">주요 프로젝트</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* P1: 은마아파트 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition group overflow-hidden">
              <div className="relative h-48 w-full bg-slate-200 mb-4">
                <Image src="/uploads/p1.png" alt="은마아파트 프로젝트" fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 mb-2 block">도시개발론</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-blue-700">은마아파트 도시개발 사업 분석</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                재건축 대장주인 은마아파트의 입지, 개발여건, SWOT 분석을 수행했습니다. 
              </p>
              <div className="flex gap-2 text-xs font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded">재건축</span>
                <span className="bg-slate-100 px-2 py-1 rounded">시장분석</span>
              </div>
            </div>

            {/* P2: 위례신도시 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition group overflow-hidden">
              <div className="relative h-48 w-full bg-slate-200 mb-4">
                <Image src="/uploads/p2.png" alt="위례신도시 프로젝트" fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 mb-2 block">단지계획</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-blue-700">위례신도시 지구단위계획 분석</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                위례신도시 지구단위계획을 분석하고, 학부모 대상 현장 인터뷰를 통해 
                계획 의도와 실제 이용 실태 간의 차이점을 조사했습니다.
              </p>
              <div className="flex gap-2 text-xs font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded">지구단위계획</span>
                <span className="bg-slate-100 px-2 py-1 rounded">현장조사</span>
              </div>
            </div>

            {/* P3: 연합 학술제 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition group overflow-hidden">
              <div className="relative h-48 w-full bg-slate-200 mb-4">
                <Image src="/uploads/p3.png" alt="연합 학술제" fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 mb-2 block">연합 학술제</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-blue-700">국내 3개 대학 연합 학술제</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                건국대, 중앙대, 단국대 부동산학회 연합 학술제를 진행하여 
                프로젝트 성과를 공유하고 타 대학 전공생들과의 네트워킹을 진행했습니다.
              </p>
              <div className="flex gap-2 text-xs font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded">네트워킹</span>
                <span className="bg-slate-100 px-2 py-1 rounded">기획</span>
              </div>
            </div>

            {/* P4: 한국투자부동산신탁 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition group overflow-hidden">
              <div className="relative h-48 w-full bg-slate-200 mb-4">
                <Image src="/uploads/p4.png" alt="부동산 신탁 분석" fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 mb-2 block">부동산 신탁</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-blue-700">한국투자부동산신탁 기업 분석</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                차입형 토지신탁 사업 사례를 선정하여 등기부등본 권리분석 및 투자성을 검토했습니다.
              </p>
              <div className="flex gap-2 text-xs font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded">권리분석</span>
                <span className="bg-slate-100 px-2 py-1 rounded">토지신탁</span>
              </div>
            </div>

            {/* P5: 가상토지 vs 현물토지 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition group overflow-hidden">
              <div className="relative h-48 w-full bg-slate-200 mb-4">
                <Image src="/uploads/p5.png" alt="메타버스 토지 비교" fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 mb-2 block">토지론 입문</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-blue-700">가상토지 vs 현물토지 비교</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                메타버스 내 가상 토지와 현실 토지의 가치 형성 요인을 비교 분석했습니다.
              </p>
              <div className="flex gap-2 text-xs font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded">메타버스</span>
                <span className="bg-slate-100 px-2 py-1 rounded">시장분석</span>
              </div>
            </div>

            {/* P6: 조치원 도시재생 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition group overflow-hidden">
              <div className="relative h-48 w-full bg-slate-200 mb-4">
                <Image src="/uploads/p6.png" alt="조치원 도시재생" fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 mb-2 block">대외활동</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-blue-700">조치원 도시재생 프로젝트</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                조치원 도시재생 지원센터를 방문하여 원도심의 문제점을 분석하고, 
                균형 발전을 위한 실질적인 아이디어를 도출했습니다.
              </p>
              <div className="flex gap-2 text-xs font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded">도시재생</span>
                <span className="bg-slate-100 px-2 py-1 rounded">지역발전</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. 연락처 (명함 스타일) */}
      <footer id="contact" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Contact Info</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
                <div className="space-y-1">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Name / Major</p>
                    <p className="text-lg font-semibold text-white">김성현</p>
                    <p className="text-sm text-slate-300">도시계획부동산학부 (3학년)</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Response Time</p>
                    <p className="text-lg font-semibold text-emerald-400">24시간 이내 응답</p>
                    <p className="text-sm text-slate-300">언제든 연락 가능합니다.</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-lg font-semibold text-white">010-5716-9308</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-lg font-semibold text-white">경기도 용인시 수지구</p>
                </div>
                <div className="md:col-span-2 space-y-1 pt-4 border-t border-slate-700 mt-2">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                    <a href="mailto:jsppp1185@dankook.ac.kr" className="text-xl font-bold text-blue-400 hover:text-white transition">
                        jsppp1185@dankook.ac.kr
                    </a>
                </div>
            </div>
            
            <p className="mt-16 text-sm text-slate-600">© 2025 Kim Sunghyun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}