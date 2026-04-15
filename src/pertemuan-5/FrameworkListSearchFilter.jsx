import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const setTag = (tag) => {
    setDataForm((prev) => ({ ...prev, selectedTag: tag }));
  };

  const clearFilter = () => {
    setDataForm({ searchTerm: "", selectedTag: "" });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(frameworkData.flatMap((f) => f.tags))];

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 px-4 py-12 antialiased">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-3">
            Framework <span className="text-indigo-600">Explorer</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-md mx-auto">
            Kumpulan framework JavaScript terbaik untuk mempercepat proses
            pengembangan aplikasi Anda.
          </p>
        </header>

        {/* CONTROLS AREA */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-8 space-y-6">
          {/* Search Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="searchTerm"
              value={dataForm.searchTerm}
              onChange={handleChange}
              placeholder="Cari nama framework atau deskripsi..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Tag Filter & Reset */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setTag("")}
                className={`px-4 py-1.5 rounded-xl text-sm font-bold transition-all ${
                  dataForm.selectedTag === ""
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setTag(tag)}
                  className={`px-4 py-1.5 rounded-xl text-sm font-bold transition-all ${
                    dataForm.selectedTag === tag
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {(dataForm.searchTerm || dataForm.selectedTag) && (
              <button
                onClick={clearFilter}
                className="text-sm font-bold text-rose-500 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </section>

        {/* LIST RESULTS */}
        <div className="grid gap-4">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-200 rounded-3xl p-6 transition-all hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold text-slate-800">
                      {item.name}
                    </h2>
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase rounded">
                      {item.details.releaseYear}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400">
                    BY {item.details.developer.toUpperCase()}
                  </p>
                </div>

                {/* FITUR VISIT WEBSITE - Dipertahankan & Dipercantik */}
                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-sm"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-slate-50 pt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredFrameworks.length === 0 && (
          <div className="py-16 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">
              Data tidak ditemukan. Coba gunakan kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
