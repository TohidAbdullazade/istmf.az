import { FC } from "react";
import SearchInput from "./SearchInput.tsx";
import SortingLabels from "./SortingLabels.tsx";

const SearchField: FC = () => {

    return (
        <div className={'flex flex-col'}>
            <section
                className={'w-[1200px] flex justify-center h-[442px] rounded-[10px] mt-[52px] bg-slate-50 relative'}>
                <article className={'w-[948px] h-[367px] flex flex-col justify-center items-center'}>
                    <div className="top-title text-center h-[17px] mb-[23px]">
                        <p className={'font-inter mt-6'}>Say “Hi” to the new world where you will learn more</p>
                    </div>
                    <div className="main-title">
                        <h3 className={'text-[56px] mt-3 text-black text-center'}>
                            Looking for a word?
                        </h3>
                        <p className={'text-[56px] text-black text-center'}>Search and find it in a second!</p>
                    </div>
                    <div className="description">
                        <p className={'font-inter text-center font-[400] text-black w-[650px]'}>
                            Lorem ipsum dolor sit amet consectetur. Ac ut duis ullamcorper purus egestas pellentesque.
                            Ut viverra vel elit morbi.
                        </p>
                    </div>
                    <SearchInput/>
                </article>
            </section>
            <SortingLabels   />
        </div>

    );
};

export default SearchField;
