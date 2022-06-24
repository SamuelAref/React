// import Search from "../components/Search";

const useFilter = (data, search) => {


    console.log('hi');
    console.log(search);
    console.log(data);

    const a = [];

    search && data && data.filter((dat) => (dat.firstName === search || dat.lastName === search ? a.push(dat) : false))

    console.log(a);






    return (a);
}

export default useFilter;