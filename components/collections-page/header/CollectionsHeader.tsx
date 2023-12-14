import './header.scss'
interface Props {
    category: string
}
export default function CollectionsHeader({ category }: Props) {
    return <header className='collections-header'>
        <div>
            <span id='path'>Home/{category}</span>
            <h1>{category.toUpperCase()}</h1>
            <span>Buy Two, Get One Free On Select Products*</span>
        </div>

    </header>
}