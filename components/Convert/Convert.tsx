"use client";
import { HotTable } from "@handsontable/react";
import 'handsontable/dist/handsontable.full.min.css';


export default function Convert(){
 return <HotTable
  data={[]}
  rowHeaders={true}
  height="auto"
  licenseKey="non-commercial-and-evaluation" // for non-commercial use only
  />
}