// import { BASE_URL } from "../utils/urls";

import { BASE_URL } from "../utils/urls";

// export const getTrendingPlots = async () => {
//   const params = new URLSearchParams({
//     approved: "true",
//     limit: "10",
//     sort: "-createdAt",
//   });

//   const res = await fetch(`${BASE_URL}/plot?${params}`);
//   const data = await res.json();

//   if (!res.ok || !data.success) {
//     throw new Error(data.message || "Failed to fetch plots");
//   }

//   return data.data || [];
// };



/**
 * Fetch trending plots (approved, sorted by newest)
 */
export const getTrendingPlots = async () => {
  try {
    const params = new URLSearchParams({
      approved: "true",
      limit: "10",
      sort: "-createdAt",
    });

    const res = await fetch(`${BASE_URL}/plot?${params}`);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch trending plots`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch trending plots");
    }

    return data.data || [];
  } catch (err) {
    console.error("getTrendingPlots error:", err);
    throw err;
  }
};

/**
 * Fetch plots by category
 */
export const getPlotsByCategory = async (category) => {
  try {
    const params = new URLSearchParams({
      category,
      approved: "true",
    });

    const res = await fetch(`${BASE_URL}/plot?${params}`);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch ${category} plots`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || `Failed to fetch ${category} plots`);
    }

    return data.data || [];
  } catch (err) {
    console.error(`getPlotsByCategory(${category}) error:`, err);
    throw err;
  }
};

/**
 * Get category counts
 */
export const getCategoryCounts = async () => {
  try {
    const [commercial, residential] = await Promise.all([
      getPlotsByCategory("Commercial"),
      getPlotsByCategory("Residential"),
    ]);

    return {
      Commercial: commercial.length,
      Residence: residential.length,
    };
  } catch (err) {
    console.error("getCategoryCounts error:", err);
    return { Commercial: 0, Residence: 0 };
  }
};

/**
 * Get single plot by ID
 */
export const getPlotById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/plot/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch plot`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch plot");
    }

    return data.data;
  } catch (err) {
    console.error("getPlotById error:", err);
    throw err;
  }
};

/**
 * Create new plot
 */
export const createPlot = async (plotData) => {
  try {
    const res = await fetch(`${BASE_URL}/plot/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plotData),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to create plot`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to create plot");
    }

    return data.data;
  } catch (err) {
    console.error("createPlot error:", err);
    throw err;
  }
};

/**
 * Update plot
 */
export const updatePlot = async (id, updates) => {
  try {
    const res = await fetch(`${BASE_URL}/plot/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to update plot`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to update plot");
    }

    return data.data;
  } catch (err) {
    console.error("updatePlot error:", err);
    throw err;
  }
};

/**
 * Delete plot
 */
export const deletePlot = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/plot/delete/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to delete plot`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to delete plot");
    }

    return data.data;
  } catch (err) {
    console.error("deletePlot error:", err);
    throw err;
  }
};

/**
 * Approve plot (admin)
 */
export const approvePlot = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/plot/approve/${id}`, {
      method: "PATCH",
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to approve plot`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to approve plot");
    }

    return data.data;
  } catch (err) {
    console.error("approvePlot error:", err);
    throw err;
  }
};