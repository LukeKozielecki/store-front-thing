import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import KeyMetricsCard, {KeyMetricCardItem} from "@/app/components/dashboard/KeyMetricsCard";
import OrdersTable, {Order} from "@/app/components/dashboard/OrdersTable";
import BestPerformingProducts, {BestPerformingProduct} from "@/app/components/dashboard/BestPerformingProducts";
import { FaShoppingCart, FaUsers, FaMoneyBillWave } from 'react-icons/fa';

const infoItems: KeyMetricCardItem[] = [
    { value: '71', label: 'Orders', icon: <FaShoppingCart/> },
    { value: '104', label: 'Customers', icon: <FaUsers/> },
    { value: '€12.574,40', label: 'Revenue', icon: <FaMoneyBillWave/> },
];

const orders: Order[] = [
    { customer: 'Shiba Inu', date: '2024-08-30', status: 'process', orderedProduct: 'ChirperBasic' },
    { customer: 'Akita Inu', date: '2024-07-29', status: 'completed', orderedProduct: 'ChirperBasic' },
    { customer: 'Siberian Husky', date: '2024-06-28', status: 'completed', orderedProduct: 'ChirperBasic' },
    { customer: 'Corgi', date: '2024-05-27', status: 'completed', orderedProduct: 'ChirperBasic' },
    { customer: 'Dire wolf', date: '2024-12-31', status: 'pending', orderedProduct: 'ChirperBasic' },
];

const products : BestPerformingProduct[]  = [
    { name: 'Paw-some Sleepy Keyboard', sales: 155 },
    { name: 'Refurbished sleepy box', sales: 122 },
    { name: 'Curiosity cat trap', sales: 107 },
    { name: 'Chirper-ex Premium', sales: 71 },
];

const Dashboard = () => {
    return (
        <main>
            {/*<NavBar/>*/}
            <div className="p-2 bg-gray-100 min-h-screen">
                <DashboardHeader/>
                <KeyMetricsCard items={infoItems}/>
                <div className="flex flex-col sm:flex-col md:flex-row ">
                    <div className="w-full pr-0 md:w-2/3 md:pr-2 sm:w-full sm:pr-0">
                        <OrdersTable orders={orders}/>
                    </div>
                    <div className="w-full md:w-1/3 pl-0 md:pl-4 sm:w-full sm:pl-0">
                        <BestPerformingProducts products={products}/>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Dashboard;