import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { getBooks } from "../Redux/AppReducer/action";

const FilterSort = () => {
    const dispatch =useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const urlCategory = searchParams.getAll('category');
    const urlSort = searchParams.get('SortBy');
  const [category, setCategory] = useState(urlCategory || []);
  const [SortBy, setSortBy] = useState(urlSort || "");
  
 

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];

    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort=(e)=>{
    setSortBy(e.target.value)
  }


  useEffect(() => {   // it show the chnegs in url with value of filtering
    if (category || SortBy) {
      let params={};
      category && (params.category =category);
      SortBy && (params.SortBy =SortBy);
      setSearchParams(params);
      // dispatch(getBooks({params: {category}}))  // remove 2st
    }
  }, [category, dispatch,setSearchParams,SortBy]);


//  useEffect(() => { // it show the chnegs in url with value of sort
//  if(SortBy){
//     const params={  //it will sort both categoty fillter and sort fotr thise we use the search param.get all
//         category:searchParams.getAll("category"),
//         SortBy,
//     }

    // const getBooksParams={  // remove from this and to booklist params
    //     params:{
    //         category:searchParams.getAll("category"),
    //         _sort:"release_year",
    //         _order:SortBy,
    //     }
    // }
    
//     setSearchParams(params);
//     // dispatch(getBooks(getBooksParams)); // remove 1st
//  }
//  },[searchParams,dispatch,setSearchParams,SortBy])

  console.log(SortBy);
  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="Checkbox"
            onChange={handleCheckbox}
            value="Novel"
            defaultChecked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>

        <div>
          <input
            type="Checkbox"
            onChange={handleCheckbox}
            value="Science_fritional"
            defaultChecked={category.includes("Science_fritional")}
          />
          <label>Science_fritional</label>
        </div>

        <div>
          <input
            type="Checkbox"
            onChange={handleCheckbox}
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>

        <div>
          <input
            type="Checkbox"
            onChange={handleCheckbox}
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="SortBy"
          defaultChecked={SortBy === "asc"}
        />{" "}
        Ascending
        <input
          type="radio"
          value="desc"
          name="SortBy"
          defaultChecked={SortBy === "dsc"}
        />{" "}
        Descending
      </div>
    </div>
  );
};

export default FilterSort;
