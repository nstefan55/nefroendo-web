import { NextRequest, NextResponse } from "next/server";

const JOTFORM_FORM_ID = "260144035639353";
// Get your API key from: JotForm → Settings → API → Create New Key
const JOTFORM_API_KEY = process.env.JOTFORM_API_KEY || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log what we're receiving for debugging
    console.log("=== Submission Data ===");
    console.log(JSON.stringify(body, null, 2));

    // Use JotForm EU API for EU accounts
    // API endpoint: https://eu-api.jotform.com/form/{formID}/submissions
    const apiUrl = `https://eu-api.jotform.com/form/${JOTFORM_FORM_ID}/submissions?apiKey=${JOTFORM_API_KEY}`;

    // Build submission object - API expects flat key-value pairs
    const submissionData = new URLSearchParams();
    Object.entries(body).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        // API format: submission[field_name] = value
        submissionData.append(`submission[${key}]`, String(value));
        console.log(`Field: submission[${key}] = ${value}`);
      }
    });

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: submissionData.toString(),
    });

    const result = await response.json();
    console.log("JotForm API Response:", JSON.stringify(result, null, 2));

    if (response.ok && result.responseCode === 200) {
      return NextResponse.json(
        { success: true, submissionId: result.content?.submissionID },
        { status: 200 }
      );
    } else {
      console.error("JotForm API failed:", result);
      return NextResponse.json(
        { success: false, error: result.message || "Submission failed" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
