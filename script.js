document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput")
    const searchResults = document.getElementById("searchResults")
    const PERIODICTABLE = [
        { H: "수소" },
        { He: "헬륨" },
        { Li: "리튬" },
        { Be: "베릴륨" },
        { B: "붕소" },
        { C: "탄소" },
        { N: "질소" },
        { O: "산소" },
        { F: "플루오린" },
        { Ne: "네온" },
        { Na: "나트륨" },
        { Mg: "마그네슘" },
        { Al: "알루미늄" },
        { Si: "규소" },
        { P: "인" },
        { S: "황" },
        { Cl: "염소" },
        { Ar: "아르곤" },
        { K: "칼륨" },
        { Ca: "칼슘" },
        { Sc: "스칸듐" },
        { Ti: "티타늄" },
        { V: "바나듐" },
        { Cr: "크로뮴" },
        { Mn: "망가니즈" },
        { Fe: "철" },
        { Co: "코발트" },
        { Ni: "니켈" },
        { Cu: "구리" },
        { Zn: "아연" },
        { Ga: "갈륨" },
        { Ge: "게르마늄" },
        { As: "비소" },
        { Se: "셀레늄" },
        { Br: "브로민" },
        { Kr: "크립톤" },
        { Rb: "루비듐" },
        { Sr: "스트론튬" },
        { Y: "이트륨" },
        { Zr: "지르코늄" },
        { Nb: "나이오븀" },
        { Mo: "몰리브데넘" },
        { Tc: "테크네튬" },
        { Ru: "루테늄" },
        { Rh: "로듐" },
        { Pd: "팔라듐" },
        { Ag: "은" },
        { Cd: "카드뮴" },
        { In: "인듐" },
        { Sn: "주석" },
        { Sb: "안티모니" },
        { Te: "텔루르" },
        { I: "아이오딘" },
        { Xe: "제논" },
        { Cs: "세슘" },
        { Ba: "바륨" },
        { La: "란타넘" },
        { Ce: "세륨" },
        { Pr: "프라세오디뮴" },
        { Nd: "네오디뮴" },
        { Pm: "프로메튬" },
        { Sm: "사마륨" },
        { Eu: "유로퓸" },
        { Gd: "가돌리늄" },
        { Tb: "터븀" },
        { Dy: "디스프로슘" },
        { Ho: "홀뮴" },
        { Er: "어븀" },
        { Tm: "툴륨" },
        { Yb: "이터븀" },
        { Lu: "루테튬" },
        { Hf: "하프늄" },
        { Ta: "탄탈럼" },
        { W: "탄소" },
        { Re: "레늄" },
        { Os: "오스뮴" },
        { Ir: "이리듐" },
        { Pt: "백금" },
        { Au: "금" },
        { Hg: "수은" },
        { Tl: "탈륨" },
        { Pb: "납" },
        { Bi: "비스무트" },
        { Po: "폴로늄" },
        { At: "아스타틴" },
        { Rn: "라돈" },
        { Fr: "프랑슘" },
        { Ra: "라듐" },
        { Ac: "악티늄" },
        { Th: "토륨" },
        { Pa: "프로트악티늄" },
        { U: "우라늄" },
        { Np: "넵투늄" },
        { Pu: "플루토늄" },
        { Am: "아메리슘" },
        { Cm: "퀴륨" },
        { Bk: "버클륨" },
        { Cf: "캘리포늄" },
        { Es: "아인슈타이늄" },
        { Fm: "페르뮴" },
        { Md: "멘델레븀" },
        { No: "노벨륨" },
        { Lr: "로렌슘" },
        { Rf: "러더포듐" },
        { Db: "더브늄" },
        { Sg: "시보귬" },
        { Bh: "보륨" },
        { Hs: "하슘" },
        { Mt: "마이트너륨" },
        { Ds: "다름슈타튬" },
        { Rg: "로엔귬" },
        { Cn: "코페르니슘" },
        { Nh: "니호늄" },
        { Fl: "플레로븀" },
        { Mc: "모스코븀" },
        { Lv: "리버모륨" },
        { Ts: "테네신" },
        { Og: "오가네손" },
    ]

    searchInput.addEventListener("input", function () {
        const value = this.value
        let result
        if (!isNaN(value)) {
            const element = PERIODICTABLE[value - 1]
            if (element) {
                const [key, pervalue] = Object.entries(element)[0]
                result = `${key} \n ${pervalue}`
            } else {
                result = `현재\n 118번까지\n 알려짐`
            }
        } else {
            for (let i = 0; i < PERIODICTABLE.length; i++) {
                const [key, pervalue] = Object.entries(PERIODICTABLE[i])[0]
                if (value.toLowerCase() === key.toLowerCase()) {
                    result = `${i + 1}\n ${pervalue}`
                    break
                } else if (value === pervalue) {
                    result = `${i + 1}\n ${key}`
                    break
                }
            }
            if (!result) {
                result = "정확히 입력해 주세요."
            }
        }

        searchResults.innerText = result
    })
})
