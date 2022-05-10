import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component'

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://photo.jtbc.joins.com/news/2017/07/17/20170717164705898.jpg'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://img.mimint.co.kr/beauty/bbs/2018/10/25/20181025194100_xplhqudp.PNG'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/22/tab/20210522002923787hsaa.jpg'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://www.fashionn.com/files/board/2018/image/p1cm6spgpa1bl418f01inj1gbnidv2.jpg'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/22/tab/20210522002929131wfyl.jpg'
    }
  ]

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
