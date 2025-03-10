import { useSelector } from 'react-redux';
import {
  selectCustomersCount,
  selectProductsCount,
  selectSuppliersCount,
} from '../../redux/dashboard/selectors.js';
import { sprite } from '../../assets/icons/index.js';
import s from './Statistics.module.scss';
import { Link } from 'react-router-dom';

const Statistics = () => {
  const productsCount = useSelector(selectProductsCount);
  const customersCount = useSelector(selectCustomersCount);
  const supplierCount = useSelector(selectSuppliersCount);

  return (
    <ul className={s.list}>
      <li>
        <Link className={s.listItem} to="/products">
          <div className={s.titleWrapper}>
            <svg className={s.icon} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-finance`}></use>
            </svg>
            <h3 className={s.title}>All products</h3>
          </div>
          <p className={s.numbers}>{productsCount}</p>
        </Link>
      </li>
      <li>
        <Link className={s.listItem} to="/suppliers">
          <div className={s.titleWrapper}>
            <svg className={s.icon} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-finance`}></use>
            </svg>
            <h3 className={s.title}>All suppliers</h3>
          </div>
          <p className={s.numbers}>{supplierCount}</p>
        </Link>
      </li>
      <li>
        <Link className={s.listItem} to="/customers">
          <div className={s.titleWrapper}>
            <svg className={s.icon} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-users`}></use>
            </svg>
            <h3 className={s.title}>All Customers</h3>
          </div>
          <p className={s.numbers}>{customersCount}</p>
        </Link>
      </li>
    </ul>
  );
};

export default Statistics;
