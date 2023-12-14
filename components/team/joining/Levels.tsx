import LevelCard from "./LevelCard"
import amateur from '@/public/images/levels/team-amateur.png'
import secondTeam from '@/public/images/levels/team-blessing.png'
import teamjosh from '@/public/images/levels/team-josh.png'
import teammichael from '@/public/images/levels/team-michael-dean.png'
import tylerteam from '@/public/images/levels/team-tyler.png'
import Requests from "./Requests"
export default function Levels() {
    return <section className="levels">
        <h2>LEVELS</h2>
        <div className="levels-list">
            <LevelCard image={amateur} level="AMATEUR">
                <Requests sales={10} shareCode={5} personalCode={8} freeProduct={2} commission={5} />
            </LevelCard>
            <LevelCard image={secondTeam} level="NOVICE">
                <Requests sales={5} shareCode={10} personalCode={5} freeProduct={1} commission={7} />
            </LevelCard>
            <LevelCard image={teamjosh} level="ADVANCED">
                <Requests sales={5} shareCode={5} personalCode={5} freeProduct={2} commission={6} />
            </LevelCard>
            <LevelCard image={teammichael} level="MASTER">
                <Requests sales={10} shareCode={3} personalCode={4} freeProduct={3} commission={9} />
            </LevelCard>
            <LevelCard image={tylerteam} level="PRO">
                <Requests sales={15} shareCode={4} personalCode={8} freeProduct={1} commission={5} />
            </LevelCard>
        </div>
    </section>
}