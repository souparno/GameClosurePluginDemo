package com.tealeaf.plugin.plugins;

import com.tealeaf.plugin.IPlugin;
import com.tealeaf.event.*;
import com.tealeaf.EventQueue;
import com.tealeaf.logger;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.Intent;
import android.content.Context;
import android.os.Bundle;

//Import the Supersonic Class
import com.supersonicads.sdk.*;
import com.supersonicads.sdk.agent.SupersonicAdsPublisherAgent;
import com.supersonicads.sdk.listeners.*;


import java.util.*;
import android.util.Log;
public class SupersonicPlugin implements IPlugin {

	//Declare the SSAPublisher Object 
	SSAPublisher ssaPub; 
	String appKey = "32e3ae95"; 
    String userId = "123";

    public void showOfferWall(){
	
		Log.d("android tag","The .java is being called");
		
		OwListner owListener= new  OwListner();
		Map<String, String> params = null;
		
		ssaPub.showOfferWall(this.appKey, userId, params, owListener);
    }

    public void onCreate(Activity activity, Bundle savedInstanceState) {
		String userId = this.userId;
		ssaPub = SSAFactory.getPublisherInstance(activity);
    }

    public void onCreateApplication(Context applicationContext) {
    }

    public void onResume() {
    }

    public void onStart() {
    }

    public void onPause() {
    }

    public void onStop() {
    }

    public void onDestroy() {
    }

    public void onNewIntent(Intent intent) {
    }

    public void onActivityResult(Integer request, Integer result, Intent data) {
    }

    public void setInstallReferrer(String referrer) {
    }
}



class OwListner implements OnOfferWallListener {
	public void onOWShowSuccess(){
		
		}
	
	public void onOWShowFail(String description){}
	
	public boolean onOWAdCredited(int credits, int totalCredits, boolean totalCreditsFlag){ return true;}
	
	public void onGetOWCreditsFailed(String description){}
	
	public void onOWAdClosed(){}
	
	public void onOWGeneric(String a , String b){}
}

