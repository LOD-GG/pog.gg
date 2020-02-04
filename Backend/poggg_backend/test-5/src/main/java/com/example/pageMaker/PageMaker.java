package com.example.pageMaker;

public class PageMaker {
	private int totalCount;
	private int pageNum;
	private int contentNum=10;;
	private int startPage=1;
	private int endPage=5;
	private boolean prev = false;
	private boolean next;
	private int currentBlock;
	private int lastblock;
	
	public void prevNext(int pageNum) {
		if(pageNum > 0 && pageNum <6) {
			setPrev(false);
			setNext(true);
		}
		else if(getLastblock()==getCurrentBlock()) {
			setPrev(true);
			setNext(false);
		}
		else {
			setPrev(true);
			setNext(true);
		}
	}
	
	public int calcpage(int totalCount, int contentNum) {
		int totalPage = totalCount/contentNum;
		if(totalCount % contentNum >0) {
			totalPage++;
		}
		return totalPage;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public int getContentNum() {
		return contentNum;
	}

	public void setContentNum(int contentNum) {
		this.contentNum = contentNum;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int currentBlock) {
		this.startPage = (currentBlock *5)-4;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int getLastBlock, int getCurrentBlock) {
		if(getLastBlock == getCurrentBlock) {
			this.endPage = calcpage(getTotalCount(), getContentNum());
		}
		else {
			this.endPage = getStartPage();
		}
	}

	public boolean isPrev() {
		return prev;
	}

	public void setPrev(boolean prev) {
		this.prev = prev;
	}

	public boolean isNext() {
		return next;
	}

	public void setNext(boolean next) {
		this.next = next;
	}

	public int getCurrentBlock() {
		return currentBlock;
	}

	public void setCurrentBlock(int pageNum) {
		this.currentBlock = pageNum/5;
		if(pageNum %5>0) {
			this.currentBlock++;
			System.out.println(this.currentBlock);
		}
	}

	public int getLastblock() {
		return lastblock;
	}

	public void setLastblock(int totalCount) {
		this.lastblock = totalCount/(5*this.contentNum);
		if(totalCount %(5*this.contentNum)>0) {
			this.lastblock++;
		}
	}
}
